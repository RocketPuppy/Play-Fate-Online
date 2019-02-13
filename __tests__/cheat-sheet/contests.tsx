import * as React from "react";
import * as renderer from "react-test-renderer";
import Contests from "../../src/cheat-sheet/contests";

test("renders all the pieces", () => {
  const render = renderer.create(<Contests />);

  expect(render.toJSON()).toMatchSnapshot();
});
