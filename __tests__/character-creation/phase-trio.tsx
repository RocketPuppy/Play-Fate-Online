import * as React from "react";
import * as renderer from "react-test-renderer";
import PhaseTrio from "../../src/character-creation/phase-trio";

test("renders all the pieces", () => {
  const render = renderer.create(<PhaseTrio />);

  expect(render.toJSON()).toMatchSnapshot();
});
