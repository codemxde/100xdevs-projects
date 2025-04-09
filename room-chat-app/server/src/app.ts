import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log(`connection with client has been established`);

  socket.on("close", () => {
    console.log("client disconnected");
  });
});
