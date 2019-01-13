import * as React from "react";

export const ladderMapping: Map<number, string> = new Map([
  [8, "Legendary"],
  [7, "Epic"],
  [6, "Fantastic"],
  [5, "Superb"],
  [4, "Great"],
  [3, "Good"],
  [2, "Fair"],
  [1, "Average"],
  [0, "Mediocre"],
  [-1, "Poor"],
  [-2, "Terrible"]
]);

export default () => (
  <div>
    <h2>The Ladder</h2>
    <dl>
      <dt>+8</dt>
      <dd>{ladderMapping.get(8)}</dd>
      <dt>+7</dt>
      <dd>{ladderMapping.get(7)}</dd>
      <dt>+6</dt>
      <dd>{ladderMapping.get(6)}</dd>
      <dt>+5</dt>
      <dd>{ladderMapping.get(5)}</dd>
      <dt>+4</dt>
      <dd>{ladderMapping.get(4)}</dd>
      <dt>+3</dt>
      <dd>{ladderMapping.get(3)}</dd>
      <dt>+2</dt>
      <dd>{ladderMapping.get(2)}</dd>
      <dt>+1</dt>
      <dd>{ladderMapping.get(1)}</dd>
      <dt>+0</dt>
      <dd>{ladderMapping.get(0)}</dd>
      <dt>-1</dt>
      <dd>{ladderMapping.get(-1)}</dd>
      <dt>-2</dt>
      <dd>{ladderMapping.get(-2)}</dd>
    </dl>
  </div>
);
