import * as React from "react";
import * as renderer from "react-test-renderer";
import Consequences from "../../src/cheat-sheet/consequences";

test("renders all the pieces", () => {
  const render = renderer.create(<Consequences />);

  expect(render.toJSON()).toMatchSnapshot();
});
