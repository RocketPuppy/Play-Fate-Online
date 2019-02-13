import * as React from "react";
import * as renderer from "react-test-renderer";
import Challenges from "../../src/cheat-sheet/challenges";

test("renders all the pieces", () => {
  const render = renderer.create(<Challenges />);

  expect(render.toJSON()).toMatchSnapshot();
});
