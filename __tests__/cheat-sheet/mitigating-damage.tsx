import * as React from "react";
import * as renderer from "react-test-renderer";
import MitigatingDamage from "../../src/cheat-sheet/mitigating-damage";

test("renders all the pieces", () => {
  const render = renderer.create(<MitigatingDamage />);

  expect(render.toJSON()).toMatchSnapshot();
});
