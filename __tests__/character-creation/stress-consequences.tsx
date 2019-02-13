import * as React from "react";
import * as renderer from "react-test-renderer";
import StressConsequences from "../../src/character-creation/stress-consequences";

test("renders all the pieces", () => {
  const render = renderer.create(<StressConsequences />);

  expect(render.toJSON()).toMatchSnapshot();
});
