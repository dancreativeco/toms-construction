import React from 'react';
import { colors, shadows, borderRadius, transitions } from '../../styles/theme.js';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-md
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${transitions.DEFAULT}
    ${fullWidth ? 'w-full' : ''}
  `;

  const variantStyles = {
    primary: `
      bg-${colors.primary[600]}
      text-white
      hover:bg-${colors.primary[700]}
      focus:ring-${colors.primary[500]}
      disabled:bg-${colors.primary[400]}
    `,
    secondary: `
      bg-white
      text-${colors.gray[700]}
      border border-${colors.gray[300]}
      hover:bg-${colors.gray[50]}
      focus:ring-${colors.primary[500]}
      disabled:bg-${colors.gray[100]}
      disabled:text-${colors.gray[400]}
    `,
    success: `
      bg-${colors.success[600]}
      text-white
      hover:bg-${colors.success[700]}
      focus:ring-${colors.success[500]}
      disabled:bg-${colors.success[400]}
    `,
    warning: `
      bg-${colors.warning[600]}
      text-white
      hover:bg-${colors.warning[700]}
      focus:ring-${colors.warning[500]}
      disabled:bg-${colors.warning[400]}
    `,
    error: `
      bg-${colors.error[600]}
      text-white
      hover:bg-${colors.error[700]}
      focus:ring-${colors.error[500]}
      disabled:bg-${colors.error[400]}
    `,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 