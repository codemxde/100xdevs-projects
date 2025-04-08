import Online from "@/icons/Online";
import Send from "@/icons/Send";
import User from "@/icons/User";
import { ModeToggle } from "../ui/mode-toggle";
import { Input } from "../ui/input";
import Message from "../ui/message";
import { RefObject, useEffect, useRef } from "react";

export default function ChatRoom() {
  // @ts-ignore
  const chatRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className="flex w-screen h-screen">
      {/* SideBar */}
      <div className="w-1/5 min-w-80 border-r-4 flex flex-col">
        {/* Room header */}
        <header className="grow-1 border-b-4 flex justify-center items-center">
          <h1 className="text-3xl font-semibold">Room: 15346762</h1>
        </header>

        {/* Room Members */}
        <div className="grow-9 flex flex-col">
          {/* Heading */}
          <h1 className="h-2/12 px-5 content-center text-2xl font-semibold">Members</h1>

          {/* Members */}
          <div className="h-11/12">
            {/* Member 1 */}
            <div className="p-4 flex gap-x-2.5 items-center hover:bg-slate-800 hover:duration-150">
              <User />
              <p className="text-lg">codemxde</p>
              <Online status={"online"} />
            </div>

            {/* Member 2 */}
            <div className="p-4 flex gap-x-2.5 items-center hover:bg-slate-800 hover:duration-150">
              <User />
              <p className="text-lg">h_kirat96</p>
              <Online status={"offline"} />
            </div>

            {/* Member 3 */}
            <div className="p-4 flex gap-x-2.5 items-center hover:bg-slate-800 hover:duration-150">
              <User />
              <p className="text-lg">dr-dre</p>
              <Online status={"online"} />
            </div>

            {/* Member 4 */}
            <div className="p-4 flex gap-x-2.5 items-center hover:bg-slate-800 hover:duration-150">
              <User />
              <p className="text-lg">eazy_e</p>
              <Online status={"offline"} />
            </div>

            {/* Member 5*/}
            <div className="p-4 flex gap-x-2.5 items-center hover:bg-slate-800 hover:duration-150">
              <User />
              <p className="text-lg">ice-cube</p>
              <Online status={"online"} />
            </div>
          </div>
        </div>
      </div>

      {/* Chat window */}
      <div className="w-4/5 p-6 flex flex-col gap-y-12">
        {/* Toggle Mode */}
        <div className="flex justify-end">
          <ModeToggle />
        </div>

        {/* Chat Screen */}
        <div
          ref={chatRef}
          className="h-5/6 p-2 flex flex-col gap-y-4 border border-white overflow-y-scroll"
        >
          <Message type={"user"} username="codemxde" text="I am having so much fun!" />
          <Message type={"other"} username="dr-dre" text="I am having so much fun!" />
          <Message type={"other"} username="ice-cube" text="I am having so much fun!" />
          <Message type={"other"} username="eazy_e" text="I am having so much fun!" />
          <Message type={"other"} username="h_kirat96" text="I am having so much fun!" />
          <Message type={"user"} username="codemxde" text="I am having so much fun!" />
          <Message type={"user"} username="codemxde" text="I am having so much fun!" />
          <Message type={"other"} username="dr-dre" text="I am having so much fun!" />
          <Message type={"other"} username="ice-cube" text="I am having so much fun!" />
          <Message type={"other"} username="eazy_e" text="I am having so much fun!" />
          <Message type={"other"} username="h_kirat96" text="I am having so much fun!" />
          <Message type={"user"} username="codemxde" text="I am having so much fun!" />
          <Message type={"user"} username="codemxde" text="I am having so much fun!" />
          <Message type={"other"} username="dr-dre" text="I am having so much fun!" />
          <Message type={"other"} username="ice-cube" text="I am having so much fun!" />
          <Message type={"other"} username="eazy_e" text="I am having so much fun!" />
          <Message type={"other"} username="h_kirat96" text="I am having so much fun!" />
          <Message type={"user"} username="codemxde" text="I am having so much fun!" />
        </div>

        {/* Type Message */}
        <div className="flex gap-x-6">
          <Input type={"text"} />
          <Send />
        </div>
      </div>
    </div>
  );
}
