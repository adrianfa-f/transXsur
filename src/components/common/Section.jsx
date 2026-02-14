import React from "react";

const Section = ({
  children,
  title,
  subtitle,
  className = "",
  container = true,
  id,
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
