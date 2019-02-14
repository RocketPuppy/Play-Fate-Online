import * as React from "react";
import * as renderer from "react-test-renderer";
import Aspects from "../../src/character-sheet/aspects";

test("renders all the pieces", () => {
  const render = renderer.create(<Aspects />);

  expect(render.toJSON()).toMatchSnapshot();
});
