import { ChangeEvent, useRef, useState } from "react";
import BrainType from "./ui/BrainType";
import Close from "../icons/Close";
import XCircle from "../icons/XCircle";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../redux/modalSlice";
import SelectOptions from "./ui/SelectOptions";

type Brain = "null" | "video" | "tweet" | "note";

export default function Modal() {
  const dispatch = useDispatch();
  const [type, setType] = useState<Brain>("null");
  const selectRef = useRef(null);

  const handleToggle = () => {
    dispatch(toggleVisibility());
  };

  const handler = (e: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setType(e.target.value);
  };
  return (
    <>
      <div className="h-screen fixed bg-slate-400 top-0 w-screen opacity-50"></div>

      {/* Add Brain */}
      <div className=" w-[20vw] min-w-96 fixed top-1/3 left-[37%] rounded-xl border shadow-md bg-slate-50">
        {/* Select Type */}
        <div className="w-full h-full px-4 py-7 flex flex-col gap-y-8 items-center">
          {/* Close icon */}
          <div className="absolute top-2 right-2">
            <XCircle hoverStyles="cursor-pointer" onClick={handleToggle} />
          </div>

          <SelectOptions reference={selectRef} handler={handler} />

          <BrainType type={type} />
        </div>
      </div>
    </>
  );
}
