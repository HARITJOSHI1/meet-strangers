const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();
if(process.env.NODE_ENV === "development") app.use(cors());

const server = http.createServer(app);
const io = require("socket.io")(server);

const connectedPeers = [];

io.on('connection', (socket) => {
    connectedPeers.push(socket.id);

    socket.on('disconnect', () => {
        const newConnedtedPeers = connectedPeers.filter(id => id !== socket.id);
        connectedPeers = newConnedtedPeers;
    });
});

app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));
app.get("/", (req, res) => res.render("index.html"));

module.exports = server;