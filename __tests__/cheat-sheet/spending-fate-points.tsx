import * as React from "react";
import * as renderer from "react-test-renderer";
import SpendingFatePoints from "../../src/cheat-sheet/spending-fate-points";

test("renders all the pieces", () => {
  const render = renderer.create(<SpendingFatePoints />);

  expect(render.toJSON()).toMatchSnapshot();
});
