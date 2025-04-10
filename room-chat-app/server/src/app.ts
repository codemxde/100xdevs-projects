import WebSocket, { WebSocketServer } from "ws";
import { generateRoomId } from "./utils/generate";

const socketMap = new Map<string, WebSocket[]>();

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log(`connection with client has been established`);

  socket.on("message", (e) => {
    const data = JSON.parse(e.toString());

    if (data.type === "create") {
      const roomID = generateRoomId() as unknown as string;

      socketMap.set(roomID, [socket]);

      socket.send(roomID.toString());
    }

    if (data.type === "join") {
      const roomID = data.payload.roomID;

      const socketArray = socketMap.get(roomID);

      if (socketArray) {
        socketMap.set(roomID, [...socketArray, socket]);
      }
    }

    if (data.type === "chat") {
      const roomID = data.payload.roomID;
      const message = data.payload.message;

      socketMap.get(roomID)?.forEach((socket) => {
        socket.send(message);
      });
    }
  });

  socket.on("close", () => {
    console.log("client disconnected");
  });
});

// $ Create Zod Validations later on

// {
//   type: "create"
// }

// {
//   type: "chat",
//   payload: {
//     roomID: "asdwe1234"
//     message: "hi there"
//   }
// }

// {
//   type: "join",
//   payload: {
//     roomID: "1223shdasjh"
//   }
// }
