import * as React from "react";
import * as renderer from "react-test-renderer";
import StuntsRefresh from "../../src/character-creation/stunts-refresh";

test("renders all the pieces", () => {
  const render = renderer.create(<StuntsRefresh />);

  expect(render.toJSON()).toMatchSnapshot();
});
