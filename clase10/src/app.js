import express from "express";
import { Server } from "socket.io";

const app = express();

app.use(express.static("./src/public"));

const httpServer = app.listen(8080, () => console.log("Server Up!"));
const socketServer = new Server(httpServer);

let log = [];

socketServer.on("connection", (socketClient) => {
  console.log(`Nuevo cliente conectado: ${socketClient.id}`);
  socketClient.emit("userid", `${socketClient.id}`);
  socketClient.emit("history", log);
  socketClient.on("message", (data) => {
    // log.push(data)
    log.push({ userId: socketClient.id, message: data });
    socketServer.emit("history", log);
  });
});
