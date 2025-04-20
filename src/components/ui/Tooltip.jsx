import React, { useState } from 'react';
import { colors, shadows, transitions } from '../../styles/theme.js';

const Tooltip = ({ 
  content,
  children,
  position = 'top',
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          className={`
            absolute z-50
            px-3 py-2
            text-sm text-white
            bg-${colors.gray[800]}
            rounded-md
            ${shadows.lg}
            ${positionStyles[position]}
            ${transitions.DEFAULT}
            ${className}
          `}
        >
          {content}
          <div
            className={`
              absolute w-2 h-2
              bg-${colors.gray[800]}
              transform rotate-45
              ${position === 'top' && 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1'}
              ${position === 'bottom' && 'top-0 left-1/2 -translate-x-1/2 -translate-y-1'}
              ${position === 'left' && 'right-0 top-1/2 -translate-y-1/2 translate-x-1'}
              ${position === 'right' && 'left-0 top-1/2 -translate-y-1/2 -translate-x-1'}
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip; 