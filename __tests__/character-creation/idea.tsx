import * as React from "react";
import * as renderer from "react-test-renderer";
import Idea from "../../src/character-creation/idea";

test("renders all the pieces", () => {
  const render = renderer.create(<Idea />);

  expect(render.toJSON()).toMatchSnapshot();
});
