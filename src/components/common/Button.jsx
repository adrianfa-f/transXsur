import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  children,
  to,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...rest
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-accent focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-accent focus:ring-secondary",
    "outline-primary":
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary",
    "outline-secondary":
      "border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white focus:ring-secondary",
    ghost: "text-primary bg-transparent hover:bg-primary/10 focus:ring-primary",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline-primary",
    "outline-secondary",
    "ghost",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
