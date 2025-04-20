import React from 'react';
import { colors, transitions } from '../../styles/theme.js';

const Input = ({ 
  label,
  error,
  helperText,
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
      <input
        className={`
          w-full
          px-3 py-2
          border rounded-md
          text-gray-900
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${error 
            ? `border-${colors.error[300]} focus:ring-${colors.error[500]} focus:border-${colors.error[500]}` 
            : `border-${colors.gray[300]} focus:ring-${colors.primary[500]} focus:border-${colors.primary[500]}`
          }
          ${transitions.DEFAULT}
          ${className}
        `}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${error ? `text-${colors.error[600]}` : `text-${colors.gray[500]}`}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input; 