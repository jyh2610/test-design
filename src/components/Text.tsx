import React from "react";
import tokens from "../../tokens.json";

interface TextProps {
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "bold";
  color?: "default" | "muted" | "light";
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = "md",
  weight = "regular",
  color = "default",
  children,
}) => {
  return (
    <span
      style={{
        color: tokens.color.text[color],
        fontFamily: tokens.font.family,
        fontSize: tokens.font.size[size],
        fontWeight: tokens.font.weight[weight],
      }}
    >
      {children}
    </span>
  );
};
