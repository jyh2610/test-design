import React from "react";
import tokens from "../../tokens.json";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  children,
}) => {
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          bg: tokens.color.key.primary,
          color: tokens.color.system.text.light,
          border: "none",
        };
      case "secondary":
        return {
          bg: tokens.color.key.secondary,
          color: tokens.color.system.text.light,
          border: "none",
        };
      case "tertiary":
        return {
          bg: tokens.color.key.tertiary,
          color: tokens.color.system.text.light,
          border: "none",
        };
      case "outlined":
        return {
          bg: "transparent",
          color: tokens.color.key.primary,
          border: `1px solid ${tokens.color.key.primary}`,
        };
      case "text":
        return {
          bg: "transparent",
          color: tokens.color.key.primary,
          border: "none",
        };
      default:
        return {
          bg: tokens.color.key.primary,
          color: tokens.color.system.text.light,
          border: "none",
        };
    }
  };

  const getPadding = () => {
    switch (size) {
      case "sm":
        return `${tokens.spacing.xs} ${tokens.spacing.md}`;
      case "lg":
        return `${tokens.spacing.md} ${tokens.spacing.xl}`;
      default:
        return `${tokens.spacing.sm} ${tokens.spacing.lg}`;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm":
        return tokens.font.size.sm;
      case "lg":
        return tokens.font.size.lg;
      default:
        return tokens.font.size.md;
    }
  };

  const colors = getColors();

  return (
    <button
      style={{
        backgroundColor: colors.bg,
        color: colors.color,
        border: colors.border,
        borderRadius: tokens.radius.sm,
        padding: getPadding(),
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: tokens.font.family.primary,
        fontSize: getFontSize(),
        fontWeight: tokens.font.weight.medium,
        boxShadow: variant !== "text" ? tokens.shadow.sm : "none",
        opacity: disabled ? 0.5 : 1,
        transition: `all ${tokens.transition.normal}`,
        width: fullWidth ? "100%" : "auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = "0.85";
          if (variant === "outlined" || variant === "text") {
            e.currentTarget.style.backgroundColor =
              tokens.color.system.background.secondary;
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = "1";
          if (variant === "outlined" || variant === "text") {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }
      }}
    >
      {children}
    </button>
  );
};