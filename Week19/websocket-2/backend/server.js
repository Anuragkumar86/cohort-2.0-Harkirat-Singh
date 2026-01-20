const { createServer } = require("http");
const { Server } = require("socket.io");
const express = require('express');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        // allowedHeaders: ["my-custom-header"],
        // credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("What is socket: ", socket);
    console.log("Connected Successfully");

    socket.on("chat", (payload) => {
        console.log("What is Payload: ", payload);
        io.emit("chat", payload); // Broadcast to all clients
    });

})

httpServer.listen(5000, () => {
    console.log("Server is listenig at port 5000")
})
