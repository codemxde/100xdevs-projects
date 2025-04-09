import { useNavigate } from "react-router-dom";
import AppHeader from "../ui/app-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/hooks/SocketContext";

export default function CreateRoom() {
  const navigate = useNavigate();
  const ws = useContext(SocketContext);

  const handleClick = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   if (room) {
  //     setSocket()
  //       .then((socket) => {
  //         navigate("/chatroom");
  //         alert("ws connection with server established");
  //       })
  //       .catch((err) => {
  //         alert("failed to establish ws connection with server");
  //       });
  //   }
  // }, [room]);

  return (
    <div>
      {/* Header */}
      <AppHeader />

      {/* Enter Room Form */}
      <div className="flex flex-col items-center gap-y-12 mt-20">
        <Input type={"text"} placeholder="Enter Username" className="w-1/5" />

        <Button className="cursor-pointer">Create Room</Button>
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
