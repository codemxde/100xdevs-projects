import { ReactElement } from "react";

interface CategoryProps {
  logo: ReactElement;
  category: string;
}

export default function Category({ logo, category }: CategoryProps) {
  return (
    <div className="flex items-center gap-x-3 p-2 text-xl hover:cursor-pointer hover:bg-slate-100 hover:rounded-md hover:duration-150">
      {/* icon */}
      {logo}

      {/* Text */}
      <p>{category}</p>
    </div>
  );
}
