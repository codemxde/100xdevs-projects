import { ChangeEventHandler, Ref } from "react";

interface SelectOptions {
  reference: Ref<HTMLSelectElement>;
  handler: ChangeEventHandler<HTMLSelectElement>;
}

export default function SelectOptions({ reference, handler }: SelectOptions) {
  return (
    <select
      ref={reference}
      className="w-3/5 px-3 py-2 mt-2 text-center border shadow-sm rounded-lg outline-none"
      name=""
      id=""
      onChange={handler}
    >
      <option value="null">Select Type</option>
      <option value="tweet">Tweet</option>
      <option value="video">Video</option>
      <option value="note">Note</option>
    </select>
  );
}
