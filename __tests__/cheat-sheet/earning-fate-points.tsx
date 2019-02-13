import * as React from "react";
import * as renderer from "react-test-renderer";
import EarningFatePoints from "../../src/cheat-sheet/earning-fate-points";

test("renders all the pieces", () => {
  const render = renderer.create(<EarningFatePoints />);

  expect(render.toJSON()).toMatchSnapshot();
});
