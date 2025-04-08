import { useNavigate } from "react-router-dom";
import AppHeader from "../ui/app-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CreateRoom() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      {/* Header */}
      <AppHeader />

      {/* Enter Room Form */}
      <div className="flex flex-col items-center gap-y-12 mt-20">
        <Input type={"text"} placeholder="Enter Username" className="w-1/5" />
        <Input type={"password"} placeholder="Enter Secret Password" className="w-1/5" />
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
