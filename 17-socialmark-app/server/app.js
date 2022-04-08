const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 2022;
const server = http.createServer(app);

const io = socketio(server, {
    cors : {
        origin : "*",
        methods : ["GET", "POST", "OPTIONS"]
    }
});
 server.listen(PORT, () => {
    io.on("connection", (socket) => {
        console.log('socket', socket.id);
        socket.emit("WELCOME_MESSAGE", "Welcome "+ socket.id);
        socket.on("NEW_BOOKMARK_EVENT", (bookmark) =>  {
            console.log('added new bookmark', bookmark)
            //io.emit("NEW_BOOKMARK_ADDED", bookmark)//send all users
            socket.broadcast.emit("NEW_BOOKMARK_ADDED", bookmark)//send all users except sender
        })
    })
 })