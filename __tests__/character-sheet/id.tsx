import * as React from "react";
import * as renderer from "react-test-renderer";
import Id from "../../src/character-sheet/id";

test("renders all the pieces", () => {
  const render = renderer.create(<Id />);

  expect(render.toJSON()).toMatchSnapshot();
});

