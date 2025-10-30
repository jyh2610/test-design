import React from "react";
import tokens from "../../tokens.json";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  shadow?: "sm" | "md" | "lg" | "xl";
  padding?: "sm" | "md" | "lg" | "xl";
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  shadow = "md",
  padding = "lg",
  hoverable = false,
  onClick,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: tokens.color.system.background.default,
        borderRadius: tokens.radius.xl,
        padding: tokens.spacing[padding],
        boxShadow:
          hoverable && isHovered ? tokens.shadow.lg : tokens.shadow[shadow],
        transition: `box-shadow ${tokens.transition.normal}, transform ${tokens.transition.normal}`,
        transform:
          hoverable && isHovered ? "translateY(-2px)" : "translateY(0)",
        cursor: onClick || hoverable ? "pointer" : "default",
        border: `1px solid ${tokens.color.system.border.default}`,
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: tokens.font.size.lg,
            fontWeight: tokens.font.weight.bold,
            color: tokens.color.system.text.default,
            fontFamily: tokens.font.family.primary,
            marginTop: 0,
            marginBottom: tokens.spacing.md,
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ fontFamily: tokens.font.family.primary }}>{children}</div>
    </div>
  );
};