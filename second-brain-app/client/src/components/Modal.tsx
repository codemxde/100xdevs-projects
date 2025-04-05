import { ChangeEvent, useRef, useState } from "react";
import Button from "./ui/Button";
import SecondBrain from "../icons/SecondBrain";

type Brain = null | "video" | "tweet" | "note";

export default function Modal() {
  const [type, setType] = useState<Brain>(null);
  const selectRef = useRef(null);

  const handler = (e: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setType(e.target.value);
  };
  return (
    <>
      <div className="h-screen fixed bg-slate-400 top-0 w-screen opacity-50"></div>

      {/* Add Brain */}
      <div className=" w-[20vw] px-4 py-7 min-w-96 fixed top-1/3 left-[37%] rounded-xl border shadow-md bg-slate-50">
        {/* Select Type */}
        <div className="w-full h-full flex flex-col gap-y-8 items-center">
          <select
            ref={selectRef}
            className="w-3/5 px-3 py-2 text-center border shadow-sm rounded-lg outline-none"
            name=""
            id=""
            onChange={handler}
          >
            <option value="null">Select Type</option>
            <option value="tweet">Tweet</option>
            <option value="video">Video</option>
            <option value="note">Note</option>
          </select>

          {type === null ? (
            ""
          ) : (
            <>
              <input
                className="px-3 py-2 w-3/4 rounded-md border shadow-sm outline-none"
                type="text"
                placeholder="enter link"
              />

              {/* Create Brain Buton */}
              <Button
                variant={"secondary"}
                text="Create Brain"
                size="sm"
                endIcon={<SecondBrain size={"btn"} />}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
