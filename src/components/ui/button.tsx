import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "round" | "nav";
};

const variants = {
  ghost: "bg-transparent text-current",
  round: "grid size-[52px] place-items-center rounded-full bg-shortcut text-shortcut-foreground shadow-sm active:scale-95",
  nav: "flex h-[58px] min-w-[88px] flex-col items-center justify-center rounded-[34px] bg-transparent text-nav-foreground",
};

export function Button({ className = "", variant = "ghost", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`transition-transform duration-150 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}