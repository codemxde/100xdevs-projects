import { useNavigate } from "react-router-dom";
import AppHeader from "../ui/app-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSocket } from "@/redux/socketSlice";

export default function CreateRoom() {
  const navigate = useNavigate();
  const [room, setRoom] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (room) {
      dispatch(setSocket());
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

        <Button
          onClick={() => {
            setRoom(true);
          }}
          className="cursor-pointer"
        >
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
