import React from "react";

const Card = ({ children, className = "", ...rest }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
