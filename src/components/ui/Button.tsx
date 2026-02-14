// src/components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg transition font-medium cursor-pointer",
        variant === "primary" && "bg-blue-600 hover:bg-blue-700 text-white",
        variant === "secondary" &&
          "border border-gray-400 hover:bg-white hover:text-black text-white",
        className
      )}
      {...props}
    />
  );
}