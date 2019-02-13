import * as React from "react";
import * as renderer from "react-test-renderer";
import Refresh from "../../src/cheat-sheet/refresh";

test("renders all the pieces", () => {
  const render = renderer.create(<Refresh />);

  expect(render.toJSON()).toMatchSnapshot();
});
