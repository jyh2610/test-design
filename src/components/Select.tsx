import React from "react";
import tokens from "../../tokens.json";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  label,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div style={{ marginBottom: tokens.spacing.md }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: tokens.spacing.xs,
            fontSize: tokens.font.size.sm,
            fontWeight: tokens.font.weight.medium,
            color: tokens.color.system.text.default,
            fontFamily: tokens.font.family.primary,
          }}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={handleChange}
        disabled={disabled}
        style={{
          width: "100%",
          padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
          fontSize: tokens.font.size.md,
          fontFamily: tokens.font.family.primary,
          color: disabled
            ? tokens.color.system.text.disabled
            : tokens.color.system.text.default,
          backgroundColor: disabled
            ? tokens.color.system.background.tertiary
            : tokens.color.system.background.default,
          border: `1px solid ${tokens.color.system.border.default}`,
          borderRadius: tokens.radius.sm,
          outline: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: `border-color ${tokens.transition.normal}`,
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3e%3cpath fill='%235C6B7A' d='M6 8L0 0h12L6 8z'/%3e%3c/svg%3e")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `right ${tokens.spacing.md} center`,
          paddingRight: tokens.spacing["3xl"],
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          if (!disabled) {
            e.target.style.borderColor = tokens.color.key.primary;
          }
        }}
        onBlur={(e) => {
          e.target.style.borderColor = tokens.color.system.border.default;
        }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};