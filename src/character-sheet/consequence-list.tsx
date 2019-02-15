import * as R from "ramda";
import * as React from "react";
import { mapWithLens } from "../utils";

const consequenceLevelMapping: Map<number, string> = new Map([
  [2, "Mild"],
  [4, "Moderate"],
  [6, "Severe"]
]);

export const maxConsequences = (consequences: Consequence[]): boolean => {
  const highestConsequence = R.last(R.sortBy(c => c.level, consequences));

  return highestConsequence !== undefined && highestConsequence.level === 6;
};

export const getNextConsequenceLevel = (
  consequences: Consequence[]
): number | undefined => {
  const levelOrder = [2, 4, 6];
  const highestConsequence = R.last(R.sortBy(c => c.level, consequences));
  if (highestConsequence && highestConsequence.level === 6) {
    return undefined;
  } else if (highestConsequence) {
    const levelIndex = R.findIndex(
      R.equals(highestConsequence.level),
      levelOrder
    );

    return levelOrder[levelIndex + 1];
  } else {
    return levelOrder[0];
  }
};

export const getNextConsequenceId = (
  consequences: Consequence[]
): number => {
  const maxId = R.reduce(R.max, 0, R.map(c => c.id, consequences));

  return maxId + 1;
};

export interface Consequence {
  description: string;
  level: number;
  id: number;
}

interface Props {
  consequences: Consequence[];
  onChange(newConsequences: Consequence[]): void;
}

export default ({ consequences, onChange }: Props) => (
  <div>
    {mapWithLens(
      (consequence, consequenceLens) => (
        <label>
          <span>{consequence.level}</span>
          <span>{consequenceLevelMapping.get(consequence.level)}</span>
          <input
            type="text"
            defaultValue={consequence.description}
            onChange={e => {
              const newConsequences = R.set(
                R.compose<string, Consequence, Consequence[]>(
                  consequenceLens,
                  R.lensProp("description")
                ) as R.Lens,
                e.target.value,
                consequences
              );
              onChange(newConsequences);
            }}
          />
        </label>
      ),
      consequences
    )}
  </div>
);
