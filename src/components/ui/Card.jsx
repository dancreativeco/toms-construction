import React from 'react';
import { shadows, borderRadius, transitions } from '../../styles/theme.js';

const Card = ({ 
  children, 
  className = '',
  hoverable = false,
  ...props 
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-lg
        ${shadows.DEFAULT}
        ${hoverable ? `hover:${shadows.md} ${transitions.DEFAULT}` : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`
        px-6 py-4
        border-b border-gray-200
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`
        px-6 py-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`
        px-6 py-4
        border-t border-gray-200
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card; 