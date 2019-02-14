import * as React from "react";
import * as renderer from "react-test-renderer";
import AddSkillInput from "../../src/character-sheet/add-skill-input";

const noop = () => {};

test("renders all the pieces", () => {
  const render = renderer.create(<AddSkillInput onSkillAdd={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});
