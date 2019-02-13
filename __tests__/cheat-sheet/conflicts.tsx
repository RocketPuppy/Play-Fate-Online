import * as React from "react";
import * as renderer from "react-test-renderer";
import Conflicts from "../../src/cheat-sheet/conflicts";

test("renders all the pieces", () => {
  const render = renderer.create(<Conflicts />);

  expect(render.toJSON()).toMatchSnapshot();
});
