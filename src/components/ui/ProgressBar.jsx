import React from 'react';
import { colors, borderRadius } from '../../styles/theme.js';

const ProgressBar = ({ 
  value,
  max = 100,
  variant = 'primary',
  showLabel = true,
  className = '',
  ...props 
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const variantStyles = {
    primary: `bg-${colors.primary[500]}`,
    success: `bg-${colors.success[500]}`,
    warning: `bg-${colors.warning[500]}`,
    error: `bg-${colors.error[500]}`,
  };

  return (
    <div className="w-full" {...props}>
      <div className="flex items-center justify-between mb-1">
        {showLabel && (
          <span className="text-sm font-medium text-gray-700">
            {percentage.toFixed(0)}%
          </span>
        )}
      </div>
      <div className={`w-full h-2 bg-${colors.gray[200]} rounded-full overflow-hidden`}>
        <div
          className={`
            h-full
            ${variantStyles[variant]}
            ${borderRadius.full}
            transition-all duration-300 ease-out
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 