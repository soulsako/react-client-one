const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io-client");
const socket = io("ws://localhost:3002/");

app.get('/api', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

socket.on('connect', (socket) => {
  console.log('a user connected');
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log('listening on *:8000');
});