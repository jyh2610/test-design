import React from "react";
import tokens from "../../tokens.json";

interface ColorBoxProps {
  color: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const ColorBox: React.FC<ColorBoxProps> = ({
  color,
  label,
  size = "md",
}) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "48px";
      case "lg":
        return "80px";
      default:
        return "60px";
    }
  };

  const boxSize = getSize();

  return (
    <div
      style={{
        textAlign: "center",
        margin: tokens.spacing.sm,
        fontFamily: tokens.font.family.primary,
      }}
    >
      <div
        style={{
          width: boxSize,
          height: boxSize,
          backgroundColor: color,
          borderRadius: tokens.radius.md,
          boxShadow: tokens.shadow.md,
          margin: "0 auto",
          border: `1px solid ${tokens.color.system.border.default}`,
        }}
      />
      {label && (
        <span
          style={{
            fontSize: tokens.font.size.sm,
            color: tokens.color.system.text.secondary,
            display: "block",
            marginTop: tokens.spacing.xs,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};