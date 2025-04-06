import { useDispatch } from "react-redux";
import SecondBrain from "../../icons/SecondBrain";
import Button from "./Button";

import { toggleVisibility } from "../../redux/modalSlice";

interface Type {
  type: "null" | "video" | "tweet" | "note";
}

export default function BrainType({ type }: Type) {
  const disptach = useDispatch();

  return (
    <>
      {type === "null" ? (
        ""
      ) : (
        <>
          {type === "video" || type === "tweet" ? (
            <input
              className="px-3 py-2 w-3/4 rounded-md border shadow-sm outline-none"
              type="text"
              placeholder="enter link"
            />
          ) : (
            <textarea
              className="px-3 py-2 w-3/4 rounded-md border outline-none"
              placeholder="Let it out!"
              name=""
              id=""
            ></textarea>
          )}

          <Button
            variant={"secondary"}
            text="Create Brain"
            size="sm"
            endIcon={<SecondBrain size={"btn"} />}
            onClick={() => {
              disptach(toggleVisibility());
            }}
          />
        </>
      )}
    </>
  );
}
