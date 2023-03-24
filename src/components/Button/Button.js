import React from 'react';

const Button = ({ className, child }) => {
  return <div className={className}>{child}</div>;
};

export default Button;
