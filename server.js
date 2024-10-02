const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './images')));

app.use((req, res, next) => {
    if (req.path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    }
    next();
});

app.get('/', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, 'index.html'));
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the file" });
    }
});

app.use((req, res) => {
    res.status(404).send("404: File Not Found");
});

app.listen(8000, () => {
    console.log("Server has started...");
});
