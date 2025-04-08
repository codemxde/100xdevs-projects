import { text } from "stream/consumers";

interface Message {
  type: "user" | "other";
  username: string;
  text: string;
}

const messageStyle = {
  user: "justify-end",
  other: "justify-start",
};

export default function Message({ type = "user", username, text }: Message) {
  return (
    <div className={`flex ${messageStyle[type]} w-full p-2`}>
      <div className="border-2 rounded-lg border-white p-2.5 flex flex-col">
        <p>{username}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
