import * as React from "react";
import * as renderer from "react-test-renderer";
import StressTrack from "../../src/character-sheet/stress-track";

test("renders with the track name", () => {
  const render = renderer.create(<StressTrack trackName="stress track" />);

  expect(render.toJSON()).toMatchSnapshot();
});

