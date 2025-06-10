import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const InputField = React.memo(
  ({
    label,
    type = "text",
    value,
    name,
    className,
    labelClassName,
    placeholder,
    onChange,
    required = false,
    disabled = false,
  }) => {
    return (
      <div className="space-y-2">
        {label && (
          <Label htmlFor={name} className={labelClassName} required={required}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={className}
        />
      </div>
    );
  }
);

export default InputField;

export const TextArea = React.memo(
  ({
    label,
    type = "text",
    value,
    name,
    className,
    labelClassName,
    placeholder,
    subtitle,
    onChange,
    required = false,
    disabled = false,
  }) => {
    return (
      <div className="space-y-2">
        {label && (
          <div className="flex gap-2">
            <Label
              htmlFor={name}
              className={labelClassName}
              required={required}
            >
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {subtitle && <p className="text-gray-400">{subtitle}</p>}
          </div>
        )}
        <Textarea
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={className}
        />
      </div>
    );
  }
);
