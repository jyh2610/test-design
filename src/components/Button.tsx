import React from "react";
import tokens from "../../tokens.json";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}) => {
  const bg =
    variant === "primary" ? tokens.color.primary : tokens.color.secondary;
  const pad =
    size === "sm" ? "6px 12px" : size === "lg" ? "10px 20px" : "8px 16px";

  return (
    <button
      style={{
        backgroundColor: bg,
        color: tokens.color.text.light,
        border: "none",
        borderRadius: tokens.radius.md,
        padding: pad,
        cursor: "pointer",
        fontFamily: tokens.font.family,
        fontSize: tokens.font.size.md,
        boxShadow: tokens.shadow.md,
        opacity: disabled ? 0.6 : 1,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
