import { useNavigate } from "react-router";
import AppHeader from "../ui/app-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function JoinRoom() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <div>
      {/* Header */}
      <AppHeader />

      {/* Enter Room Form */}
      <div className="flex flex-col items-center gap-y-12 mt-20">
        <Input type={"text"} placeholder="Enter Room ID" className="w-1/5" />
        <Input type={"text"} placeholder="Enter Username" className="w-1/5" />
        <Button className="cursor-pointer">Join</Button>
      </div>

      {/* Create New Room */}
      <div className="absolute bottom-10 right-10">
        <Button onClick={handleClick} variant={"outline"}>
          Create New Room
        </Button>
      </div>
    </div>
  );
}
