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

app.get('/send-JSON', (req,res) => {
    res.json({message: "Here's little JSON!"});
});

app.get("/get-new-browse/", async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT us.username, ws.title 
            FROM ci_workspaces AS ws
            JOIN ci_users AS us
            ON us.id = ws.user_id`
        );
        res.json({
            titles: rows.map(row => row.title),
            names: rows.map(row => row.username)
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