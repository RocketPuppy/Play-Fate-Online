import * as React from "react";
import * as renderer from "react-test-renderer";
import Index from "../../src/character-sheet/index";

test("renders all the pieces", () => {
  const render = renderer.create(<Index />);

  expect(render.toJSON()).toMatchSnapshot();
});

