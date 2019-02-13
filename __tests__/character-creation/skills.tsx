import * as React from "react";
import * as renderer from "react-test-renderer";
import Skills from "../../src/character-creation/skills";

test("renders all the pieces", () => {
  const render = renderer.create(<Skills />);

  expect(render.toJSON()).toMatchSnapshot();
});
