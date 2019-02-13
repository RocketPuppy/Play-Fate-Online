import * as React from "react";
import * as renderer from "react-test-renderer";
import SkillRoll from "../../src/cheat-sheet/skill-roll";

test("renders all the pieces", () => {
  const render = renderer.create(<SkillRoll />);

  expect(render.toJSON()).toMatchSnapshot();
});
