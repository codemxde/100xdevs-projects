import { createContext, useCallback, useRef } from "react";

type Socket = WebSocket | null;

export const SocketContext = createContext<Socket>(null);

// $ Try working on this for a robust, asynchronous approach
// const establishWSConnection = (): Promise<WebSocket> => {
//   return new Promise((resolve, reject) => {
//     const ws = new WebSocket("ws://localhost:8080");

//     ws.onopen = () => resolve(ws);
//     ws.onclose = (err) => reject(err);
//   });
// };

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const websocketRef = useRef<Socket>(null);

  const useSocket = useCallback(() => {
    if (!websocketRef.current) {
      websocketRef.current = new WebSocket("ws://localhost:8080");
    }
    return websocketRef.current;
  }, []);

  return <SocketContext.Provider value={useSocket()}>{children}</SocketContext.Provider>;
};
