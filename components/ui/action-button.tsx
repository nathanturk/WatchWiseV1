import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
}

export const ActionButton = ({ 
  children, 
  variant = "primary", 
  size = "md",
  icon,
  loading = false,
  className,
  ...props 
}: ActionButtonProps) => {
  const baseClasses = "transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    primary: "orange-gradient text-white shadow-lg",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    outline: "border-white/20 text-white hover:bg-white/10 bg-transparent",
    ghost: "text-gray-400 hover:text-white hover:scale-105",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </Button>
  );
};
