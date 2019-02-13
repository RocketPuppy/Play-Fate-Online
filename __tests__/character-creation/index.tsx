import * as React from "react";
import * as renderer from "react-test-renderer";
import CharacterCreation from "../../src/character-creation";

test("renders all the pieces", () => {
  const render = renderer.create(<CharacterCreation />);

  expect(render.toJSON()).toMatchSnapshot();
});
