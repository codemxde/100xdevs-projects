import { useNavigate } from "react-router-dom";
import AppHeader from "../ui/app-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/hooks/SocketContext";
import { useSocket } from "@/hooks/Socket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSocket } from "@/redux/socketSlice";

export default function CreateRoom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ws = useSelector<RootState>((state) => state.socket.websocket);
  const [room, setRoom] = useState<Boolean>(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleCreateRoom = () => {
    setRoom(true);
  };

  useEffect(() => {
    if (room) {
      dispatch(setSocket());

      // @ts-ignore
      ws.send(
        JSON.stringify({
          type: "create",
        })
      );

      // @ts-ignore
      ws.onmessage = (e) => {
        const response = JSON.parse(e.data);

        if (response.type === "create") {
          const roomID = response.payload.roomID;
          localStorage.setItem("roomID", roomID);
        }
      };

      navigate("/chatroom");
    }
  }, [room]);

  return (
    <div>
      {/* Header */}
      <AppHeader />

      {/* Enter Room Form */}
      <div className="flex flex-col items-center gap-y-12 mt-20">
        <Input type={"text"} placeholder="Enter Username" className="w-1/5" />

        <Button onClick={handleCreateRoom} className="cursor-pointer">
          Create Room
        </Button>
      </div>

      {/* Create New Room */}
      <div className="absolute bottom-10 right-10">
        <Button onClick={handleClick} variant={"outline"}>
          Join Existing Room ?
        </Button>
      </div>
    </div>
  );
}
