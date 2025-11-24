import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white";
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, variant = "primary", children, ...props }) => {
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 border border-transparent",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-black",
    white: "bg-white text-brand-black hover:bg-gray-100 border border-transparent",
  };

  return (
    <button
      className={cn(
        "px-8 py-3 font-heading font-bold uppercase tracking-wider transition-all duration-300 text-sm md:text-base rounded-sm shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};