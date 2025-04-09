let websocket: WebSocket | null = null;

export const setSocket = () => {
  if (!websocket) {
    return new Promise((resolve, reject) => {
      websocket = new WebSocket("ws://localhost:8080");

      websocket.onopen = (socket) => resolve(socket);

      websocket.onclose = (err) => reject(err);
    });
  }
};

export const getSocket = () => {
  if (!websocket) {
    throw new Error("websocket needs to be initialised first");
  }
  return websocket;
};
