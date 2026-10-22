"use client";

import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import type { CSSProperties, ReactNode } from "react";

type UInputProps = {
  type?: string;
  name: string;
  label?: ReactNode;
  size?: "small" | "middle" | "large";
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  labelStyles?: CSSProperties;
  className?: string;
  suffix?: ReactNode;
  style?: CSSProperties;
  max?: number;
  required?: boolean;
};

const UInput = ({
  type,
  name,
  label,
  size,
  placeholder,
  defaultValue,
  disabled = false,
  labelStyles = {},
  className,
  suffix,
  style,
  max,
  required,
}: UInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={
            Object.keys(labelStyles)?.length > 0 ? (
              <label style={labelStyles}>{label}</label>
            ) : (
              label
            )
          }
          validateStatus={error ? "error" : ""}
          help={error ? error.message : ""}
        >
          {type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              id={name}
              size={size}
              placeholder={placeholder}
              className={`h-9 ${className}`}
            />
          ) : (
            <Input
              {...field}
              type={type}
              id={name}
              size={size}
              placeholder={placeholder}
              disabled={disabled}
              className={`h-9 ${className}`}
              suffix={suffix}
              style={style}
              max={max}
            />
          )}
        </Form.Item>
      )}
    />
  );
};

export default UInput;
