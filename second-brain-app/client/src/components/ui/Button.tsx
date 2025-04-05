import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

interface Variant {
  primary: string;
  secondary: string;
}

interface Size {
  sm: string;
  md: string;
  lg: string;
}

const variantStyles: Variant = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-secondaryText",
};

const sizeStyles: Size = {
  sm: "py-2 px-4",
  md: "py-4 px-6",
  lg: "py-4 px-8",
};

const defaultStyles = "rounded-lg font-light flex gap-x-2 items-center";

export default function Button({ variant, text, size, startIcon }: ButtonProps) {
  return (
    <button className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles} `}>
      {startIcon}
      {text}
    </button>
  );
}
