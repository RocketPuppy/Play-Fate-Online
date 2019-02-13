import * as React from "react";
import * as renderer from "react-test-renderer";
import CompellingAspects from "../../src/cheat-sheet/compelling-aspects";

test("renders all the pieces", () => {
  const render = renderer.create(<CompellingAspects />);

  expect(render.toJSON()).toMatchSnapshot();
});
