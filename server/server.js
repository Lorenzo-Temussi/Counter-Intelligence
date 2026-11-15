const express = require('express');
const app = express();
const port = 3000;

// This line tells Express to serve static files from a folder named 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/browse-new', (req, res) => {
    res.sendFile(__dirname + '/public/htmls/browseNew.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/htmls/404.html');
})

app.listen(port, () => {
    console.log("Listening, always...");
});