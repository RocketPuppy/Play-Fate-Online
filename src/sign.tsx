import * as React from "react";

interface SignProps {
  num: number;
}

export default ({ num }: SignProps) =>
  num >= 0 ? <span>+</span> : <span>-</span>;
