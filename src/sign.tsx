import * as React from "react";

interface SignProps {
  num: number;
}

export default ({ num }: SignProps) => {
  if (num === 0) {
    return <span />;
  }
  if (num > 0) {
    return <span>+</span>;
  }
  return <span>-</span>;
};
