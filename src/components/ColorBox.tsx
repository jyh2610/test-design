import React from "react";
import tokens from "../../tokens.json";

interface ColorBoxProps {
  color: string;
  label?: string;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ color, label }) => {
  return (
    <div style={{ textAlign: "center", margin: tokens.spacing.sm }}>
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: color,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadow.md,
          margin: "0 auto",
        }}
      />
      {label && <span style={{ fontSize: tokens.font.size.sm }}>{label}</span>}
    </div>
  );
};
