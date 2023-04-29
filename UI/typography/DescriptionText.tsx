import React from "react";

function DescriptionText({
  description,
  className,
  sub,
  ...other
}: {
  description: string;
  className?: string;
  sub?: number;
  other?: any;
}) {
  return (
    <p
      className={`text-gray-600 font-light dark:text-gray-300 ${className}`}
      {...other}
    >
      {description.substring(0, sub ? sub : 100)}...
    </p>
  );
}

export default DescriptionText;
