import Chat from "@/icons/Chat";
import { ModeToggle } from "../ui/mode-toggle";

export default function AppHeader() {
  return (
    <header className="flex py-4 items-center justify-center gap-x-5">
      <h1 className="text-5xl font-semibold">codechat.io</h1>
      <Chat />
      <ModeToggle position={"absolute"} />
    </header>
  );
}
