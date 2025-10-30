import React from "react";
import tokens from "../../tokens.json";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "error" | "info" | "neutral";
  size?: "sm" | "md" | "lg";
  outlined?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  outlined = false,
}) => {
  const getColors = () => {
    const colorMap = {
      primary: tokens.color.key.primary,
      success: tokens.color.point.success,
      warning: tokens.color.point.warning,
      error: tokens.color.point.error,
      info: tokens.color.point.info,
      neutral: tokens.color.key.tertiary,
    };

    const bgColor = colorMap[variant];
    return {
      backgroundColor: outlined ? "transparent" : bgColor,
      color: outlined ? bgColor : tokens.color.system.text.light,
      borderColor: bgColor,
    };
  };

  const getPadding = () => {
    switch (size) {
      case "sm":
        return `${tokens.spacing.xs} ${tokens.spacing.sm}`;
      case "lg":
        return `${tokens.spacing.sm} ${tokens.spacing.lg}`;
      default:
        return `${tokens.spacing.xs} ${tokens.spacing.md}`;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm":
        return tokens.font.size.xs;
      case "lg":
        return tokens.font.size.md;
      default:
        return tokens.font.size.sm;
    }
  };

  const colors = getColors();

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: colors.backgroundColor,
        color: colors.color,
        border: outlined ? `1px solid ${colors.borderColor}` : "none",
        borderRadius: tokens.radius.full,
        padding: getPadding(),
        fontSize: getFontSize(),
        fontWeight: tokens.font.weight.medium,
        fontFamily: tokens.font.family.primary,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
};