// let websocket: Socket = null;

// export const setSocket = () => {
//   if (!websocket) {
//     websocket = new WebSocket("ws://localhost:8080");
//   }
// };

// const setSocket = () => {
//   return new Promise((resolve, reject) => {
//     websocket = new WebSocket("ws://localhost:8080");

//     websocket.onopen = () => resolve(websocket);
//     websocket.onerror = (err) => reject(err);
//   });
// };

import { useRef } from "react";

type Socket = WebSocket | null;

export default function useSocket() {
  const websocketRef = useRef<Socket>(null);

  const setSocket = () => {
    if (!websocketRef.current) {
      return new Promise((resolve, reject) => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
          websocketRef.current = ws;
          resolve(ws);
        };

        ws.onerror = (err) => {
          reject(err);
        };
      });
    } else {
      throw new Error("Websocket connection has already been initialised!");
    }
  };

  const getSocket = () => {
    if (!websocketRef.current) {
      throw new Error("Websocket needs to be initialized first");
    }
    return websocketRef.current;
  };

  return { setSocket, getSocket };
}
