import AppHeader from "../ui/app-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function JoinRoom() {
  return (
    <div>
      {/* Header */}
      <AppHeader />

      <div className="flex flex-col items-center gap-y-12 mt-20">
        <Input type={"text"} placeholder="Enter Room ID" className="w-1/5" />
        <Input type={"text"} placeholder="Enter Username" className="w-1/5" />
        <Button className="cursor-pointer">Join</Button>
      </div>

      <div className="absolute bottom-10 right-10">
        <Button variant={"outline"}>Create New Room</Button>
      </div>
    </div>
  );
}
