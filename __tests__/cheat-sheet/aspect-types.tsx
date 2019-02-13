import * as React from "react";
import * as renderer from "react-test-renderer";
import AspectTypes from "../../src/cheat-sheet/aspect-types";

test("renders all the pieces", () => {
  const render = renderer.create(<AspectTypes />);

  expect(render.toJSON()).toMatchSnapshot();
});
