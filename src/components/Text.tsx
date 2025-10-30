import React from "react";
import tokens from "../../tokens.json";

interface TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: "default" | "secondary" | "tertiary" | "light" | "disabled";
  children: React.ReactNode;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
}

export const Text: React.FC<TextProps> = ({
  size = "md",
  weight = "regular",
  color = "default",
  children,
  as: Component = "p",
  align = "left",
}) => {
  const getColor = () => {
    switch (color) {
      case "secondary":
        return tokens.color.system.text.secondary;
      case "tertiary":
        return tokens.color.system.text.tertiary;
      case "light":
        return tokens.color.system.text.light;
      case "disabled":
        return tokens.color.system.text.disabled;
      default:
        return tokens.color.system.text.default;
    }
  };

  return (
    <Component
      style={{
        fontSize: tokens.font.size[size],
        fontWeight: tokens.font.weight[weight],
        color: getColor(),
        fontFamily: tokens.font.family.primary,
        lineHeight: tokens.font.lineHeight.normal,
        textAlign: align,
        margin: 0,
      }}
    >
      {children}
    </Component>
  );
};