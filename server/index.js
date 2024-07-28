const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/about", (req, res) => {
    res.json({ message: 'About page data' });
});

const server = http.createServer(app);
server.maxHeaderSize = 16384; // Increase header size limit if needed

server.listen(8000, () => console.log("server started"));
