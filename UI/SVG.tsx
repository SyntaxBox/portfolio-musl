import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

function SVG(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  const { children, ...prop } = props;
  return <div {...prop}>{children}</div>;
}

export default SVG;
