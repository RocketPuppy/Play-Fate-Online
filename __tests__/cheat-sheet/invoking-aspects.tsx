import * as React from "react";
import * as renderer from "react-test-renderer";
import InvokingAspects from "../../src/cheat-sheet/invoking-aspects";

test("renders all the pieces", () => {
  const render = renderer.create(<InvokingAspects />);

  expect(render.toJSON()).toMatchSnapshot();
});
