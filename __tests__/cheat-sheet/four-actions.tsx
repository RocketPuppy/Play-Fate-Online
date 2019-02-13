import * as React from "react";
import * as renderer from "react-test-renderer";
import FourActions from "../../src/cheat-sheet/four-actions";

test("renders all the pieces", () => {
  const render = renderer.create(<FourActions />);

  expect(render.toJSON()).toMatchSnapshot();
});
