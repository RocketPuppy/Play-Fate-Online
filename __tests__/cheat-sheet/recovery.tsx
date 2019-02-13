import * as React from "react";
import * as renderer from "react-test-renderer";
import Recovery from "../../src/cheat-sheet/recovery";

test("renders all the pieces", () => {
  const render = renderer.create(<Recovery />);

  expect(render.toJSON()).toMatchSnapshot();
});
