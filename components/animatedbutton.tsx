import { cn } from "@/lib/utils";
import React from "react";

type AnimatedButtonProps = {
  variant?: "default" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  ...props
}: AnimatedButtonProps) {
  const baseClass =
    "relative overflow-hidden z-0 group rounded-full transition-all duration-500 " +
    "px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 font-medium";

  const variantClasses = {
    default:
      "border-2 border-neutral-800 bg-neutral-800 text-white hover:text-neutral-800",
    outline:
      "border-2 border-neutral-800 bg-white text-neutral-800 hover:text-white",
    ghost:
      "border-2 border-white bg-white text-neutral-800 hover:text-white hover:bg-neutral-800",
  };

  const hoverBgColor = {
    default: "bg-white",
    outline: "bg-neutral-800",
    ghost: "bg-neutral-800",
  };

  return (
    <button
      {...props}
      className={cn(
        baseClass,
        variantClasses[variant],
        "relative overflow-hidden", // Đảm bảo nền hover nằm trong button
        className!
      )}
    >
      {/* Nền hover */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2",
          "w-[500px] h-[500px]", // Đảm bảo ngang >= button
          "rounded-full",
          "-translate-y-[100px] group-hover:translate-y-[50px]",
          "transition-transform duration-700 ease-in-out z-[-1]",
          hoverBgColor[variant]
        )}
      />

      {/* Nội dung */}
      <span className="relative z-10 flex items-center gap-1 sm:gap-2">
        {children}
      </span>
    </button>
  );
}
