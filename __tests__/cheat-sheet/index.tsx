import * as React from "react";
import * as renderer from "react-test-renderer";
import CheatSheet from "../../src/cheat-sheet";

test("renders all the pieces", () => {
  const render = renderer.create(<CheatSheet />);

  expect(render.toJSON()).toMatchSnapshot();
});
