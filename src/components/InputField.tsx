import React, { useState } from 'react';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password';
  clearable?: boolean;
  showPasswordToggle?: boolean;
  theme?: 'light' | 'dark';
}

export const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable = false,
  showPasswordToggle = false,
  theme = 'light',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    if (onChange) {
      onChange({
        ...({} as React.ChangeEvent<HTMLInputElement>),
        target: { value: '' } as any,
      });
    }
  };

  const inputType = showPasswordToggle && type === 'password' && showPassword ? 'text' : type;

  // Size classes
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-5',
  };

  // Variant classes - with dark theme support
  const getVariantClasses = () => {
    if (theme === 'dark') {
      switch (variant) {
        case 'filled': return 'bg-gray-700 border-transparent text-white placeholder-gray-400';
        case 'outlined': return 'bg-gray-800 border-gray-600 border-2 text-white placeholder-gray-400';
        case 'ghost': return 'bg-transparent border-transparent text-white placeholder-gray-400';
        default: return 'bg-gray-800 border-gray-600 border-2 text-white placeholder-gray-400';
      }
    } else {
      switch (variant) {
        case 'filled': return 'bg-gray-100 border-transparent text-gray-900 placeholder-gray-500';
        case 'outlined': return 'bg-white border-gray-300 border-2 text-gray-900 placeholder-gray-500';
        case 'ghost': return 'bg-transparent border-transparent text-gray-900 placeholder-gray-500';
        default: return 'bg-white border-gray-300 border-2 text-gray-900 placeholder-gray-500';
      }
    }
  };

  // State classes
  const getStateClasses = () => {
    let classes = '';
    
    if (disabled) {
      classes += theme === 'dark' 
        ? ' bg-gray-900 text-gray-600 cursor-not-allowed border-gray-700' 
        : ' bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200';
    }
    
    if (invalid) {
      classes += ' border-red-500';
    }
    
    return classes;
  };

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className={`font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`
            w-full rounded-md transition-colors duration-200 focus:outline-none focus:ring-2
            ${theme === 'dark' ? 'focus:ring-blue-400' : 'focus:ring-blue-500'}
            ${sizeClasses[size]}
            ${getVariantClasses()}
            ${getStateClasses()}
          `}
          aria-label={label || placeholder}
        />
        {clearable && value && (
          <button
            type="button"
            className="absolute right-10 p-1 text-gray-500 hover:text-gray-700 rounded"
            onClick={handleClear}
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        )}
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className="absolute right-2 p-1 text-gray-500 hover:text-gray-700 rounded"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
        {loading && (
          <span className="absolute right-2 text-gray-500" aria-label="Loading">
            <Loader2 size={16} className="animate-spin" />
          </span>
        )}
      </div>
      {helperText && !invalid && (
        <div className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {helperText}
        </div>
      )}
      {invalid && errorMessage && (
        <div className="text-sm mt-1 text-red-600">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
