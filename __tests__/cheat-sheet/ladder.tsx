import * as React from "react";
import * as renderer from "react-test-renderer";
import Ladder from "../../src/cheat-sheet/ladder";

test("renders all the pieces", () => {
  const render = renderer.create(<Ladder />);

  expect(render.toJSON()).toMatchSnapshot();
});
