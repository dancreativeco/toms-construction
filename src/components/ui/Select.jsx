import React from 'react';
import { colors, transitions } from '../../styles/theme.js';

const Select = ({ 
  label,
  error,
  helperText,
  options = [],
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className={`
          w-full
          px-3 py-2
          border rounded-md
          text-gray-900
          bg-white
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${error 
            ? `border-${colors.error[300]} focus:ring-${colors.error[500]} focus:border-${colors.error[500]}` 
            : `border-${colors.gray[300]} focus:ring-${colors.primary[500]} focus:border-${colors.primary[500]}`
          }
          ${transitions.DEFAULT}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && (
        <p className={`mt-1 text-sm ${error ? `text-${colors.error[600]}` : `text-${colors.gray[500]}`}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Select; 