import React from "react";
import tokens from "../../tokens.json";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label,
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(e.target.checked);
    }
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: tokens.font.family.primary,
        fontSize: tokens.font.size.md,
        color: disabled
          ? tokens.color.system.text.disabled
          : tokens.color.system.text.default,
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        style={{
          width: "18px",
          height: "18px",
          marginRight: tokens.spacing.sm,
          cursor: disabled ? "not-allowed" : "pointer",
          accentColor: tokens.color.key.primary,
        }}
      />
      {label && <span>{label}</span>}
    </label>
  );
};