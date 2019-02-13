import * as React from "react";
import * as renderer from "react-test-renderer";
import OppositionTypes from "../../src/cheat-sheet/opposition-types";

test("renders all the pieces", () => {
  const render = renderer.create(<OppositionTypes />);

  expect(render.toJSON()).toMatchSnapshot();
});
