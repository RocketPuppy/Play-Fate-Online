import * as React from "react";

interface Props {
  stressLevel: number;
  used: boolean;
  onUse(used: boolean): void;
}

export default ({ stressLevel, used, onUse }: Props) => (
  <label>
    <span>{stressLevel}</span>
    <input
      type="checkbox"
      checked={used}
      onChange={e => {
        onUse(e.target.checked);
      }}
    />
  </label>
);
