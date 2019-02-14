import * as React from "react";
import * as renderer from "react-test-renderer";
import Extras from "../../src/character-sheet/extras";

test("renders all the pieces", () => {
  const render = renderer.create(<Extras />);

  expect(render.toJSON()).toMatchSnapshot();
});
