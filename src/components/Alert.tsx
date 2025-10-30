import React from "react";
import tokens from "../../tokens.json";

interface AlertProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info";
  title?: string;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = "info",
  title,
  closable = false,
  onClose,
}) => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  const getColors = () => {
    const colorMap = {
      success: {
        bg: "#E8F5E9",
        border: tokens.color.point.success,
        text: tokens.color.system.text.default,
      },
      warning: {
        bg: "#FFF4E5",
        border: tokens.color.point.warning,
        text: tokens.color.system.text.default,
      },
      error: {
        bg: "#FFEBEE",
        border: tokens.color.point.error,
        text: tokens.color.system.text.default,
      },
      info: {
        bg: "#E3F2FD",
        border: tokens.color.point.info,
        text: tokens.color.system.text.default,
      },
    };
    return colorMap[variant];
  };

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const colors = getColors();

  return (
    <div
      role="alert"
      style={{
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
        borderLeft: `4px solid ${colors.border}`,
        borderRadius: tokens.radius.sm,
        padding: tokens.spacing.md,
        marginBottom: tokens.spacing.md,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        fontFamily: tokens.font.family.primary,
      }}
    >
      <div style={{ flex: 1 }}>
        {title && (
          <div
            style={{
              fontSize: tokens.font.size.md,
              fontWeight: tokens.font.weight.bold,
              color: colors.text,
              marginBottom: tokens.spacing.xs,
            }}
          >
            {title}
          </div>
        )}
        <div
          style={{
            fontSize: tokens.font.size.sm,
            color: colors.text,
            lineHeight: tokens.font.lineHeight.normal,
          }}
        >
          {children}
        </div>
      </div>
      {closable && (
        <button
          onClick={handleClose}
          aria-label="닫기"
          style={{
            background: "none",
            border: "none",
            fontSize: tokens.font.size.lg,
            color: colors.text,
            cursor: "pointer",
            padding: 0,
            marginLeft: tokens.spacing.md,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};