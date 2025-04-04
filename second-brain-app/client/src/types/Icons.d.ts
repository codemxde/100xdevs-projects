export default interface Size {
  size: "sm" | "md" | "lg";
  styles?: string;
}

export const sizeStyles = {
  sm: "size-5",
  md: "size-8",
  lg: "size-10",
};
