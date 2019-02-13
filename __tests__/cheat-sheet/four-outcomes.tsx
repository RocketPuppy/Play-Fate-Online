import * as React from "react";
import * as renderer from "react-test-renderer";
import FourOutcomes from "../../src/cheat-sheet/four-outcomes";

test("renders all the pieces", () => {
  const render = renderer.create(<FourOutcomes />);

  expect(render.toJSON()).toMatchSnapshot();
});
