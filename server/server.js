require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// pool init
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// This line tells Express to serve static files from a folder named 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/browse-new', (req, res) => {
    res.sendFile(__dirname + '/public/htmls/browseNew.html');
});

app.get('/user-space', (req, res) => {
    res.sendFile(__dirname + '/public/htmls/user-space.html');
});

app.get('/send-JSON', (req,res) => {
    res.json({message: "Here's little JSON!"});
});

app.get("/get-new-browse/", async (req, res) => {
    const currentPage = Number(req.query.currentPage ?? 0);
    const numOfElementsPerPage = Number(req.query.numOfElementsPerPage ?? 10);
    const offset = currentPage * numOfElementsPerPage;

    if (
        !Number.isSafeInteger(currentPage) || currentPage < 0 ||
        !Number.isSafeInteger(numOfElementsPerPage) ||
        numOfElementsPerPage < 1 || numOfElementsPerPage > 100 ||
        !Number.isSafeInteger(offset)
    ) {
        return res.status(400).json({ message: "Invalid pagination parameters" });
    }

    try {
        const [rows] = await pool.execute(
            `SELECT us.username, ws.title 
            FROM ci_workspaces AS ws
            JOIN ci_users AS us
            ON us.id = ws.user_id
            ORDER BY ws.user_id ASC, ws.id ASC
            LIMIT ? OFFSET ?
            `,
            [numOfElementsPerPage, offset]
        );

        res.json({
            titles: rows.map(row => row.title),
            names: rows.map(row => row.username),
        });
    } catch (err) {
        console.error("Error in query execution:", err);
        res.status(500).json({ success: false, message: "Database query failed" });
    }
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/htmls/404.html');
});

app.listen(port, () => {
    console.log("Listening, always...");
});