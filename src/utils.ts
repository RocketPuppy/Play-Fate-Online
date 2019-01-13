import * as R from "ramda";

export function mapWithLens<T, Y>(fn: (v: T, l: R.Lens) => Y, arr: T[]): Y[] {
  return R.addIndex<T, Y>(R.map)((v, i) => fn(v, R.lensIndex(i)), arr);
}
