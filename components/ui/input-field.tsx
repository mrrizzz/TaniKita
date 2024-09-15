import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  register: any;
  errors?: Record<string, any>;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  register,
  errors,
  disabled = false,
}) => (
  <div>
    <Input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={cn(
        "w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary",
        errors && errors[name] //.{name}
          ? "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300",
      )}
    />
    {errors && errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);
