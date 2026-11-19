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

app.get('/send-JSON', (req,res) => {
    res.json({message: "Here's little JSON!"});
});

app.get("/get-new-browse/", (req, res) => {
    const value = req.params.value;
    res.json({"titles": [
        "title_of_first_publicWS",
        "title_of_second_publicWS",
        "title_of_third_publicWS"
    ],
    "names": [
        "name_of_first_publicWS",
        "name_of_second_publicWS",
        "name_of_third_publicWS"
    ]});
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/htmls/404.html');
});

app.listen(port, () => {
    console.log("Listening, always...");
});