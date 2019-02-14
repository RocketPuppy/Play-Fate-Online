import * as React from "react";
import * as renderer from "react-test-renderer";
import Stunts from "../../src/character-sheet/stunts";

test("renders all the pieces", () => {
  const render = renderer.create(<Stunts />);

  expect(render.toJSON()).toMatchSnapshot();
});

