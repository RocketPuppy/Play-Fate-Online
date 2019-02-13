import * as React from "react";
import * as renderer from "react-test-renderer";
import GameTime from "../../src/cheat-sheet/game-time";

test("renders all the pieces", () => {
  const render = renderer.create(<GameTime />);

  expect(render.toJSON()).toMatchSnapshot();
});

