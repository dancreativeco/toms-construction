import React from 'react';
import { colors, borderRadius } from '../../styles/theme.js';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center font-medium
    ${borderRadius.DEFAULT}
  `;

  const variantStyles = {
    default: `
      bg-${colors.gray[100]}
      text-${colors.gray[800]}
    `,
    primary: `
      bg-${colors.primary[100]}
      text-${colors.primary[800]}
    `,
    success: `
      bg-${colors.success[100]}
      text-${colors.success[800]}
    `,
    warning: `
      bg-${colors.warning[100]}
      text-${colors.warning[800]}
    `,
    error: `
      bg-${colors.error[100]}
      text-${colors.error[800]}
    `,
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge; 