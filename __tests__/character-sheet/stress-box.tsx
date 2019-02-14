import * as React from "react";
import * as renderer from "react-test-renderer";
import StressBox from "../../src/character-sheet/stress-box";

const noop = () => {};

test("renders with the stress level", () => {
  const render = renderer.create(<StressBox stressLevel={2} used={false} onUse={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});

test("renders unchecked", () => {
  const render = renderer.create(<StressBox stressLevel={2} used={false} onUse={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});


test("renders checked", () => {
  const render = renderer.create(<StressBox stressLevel={2} used={true} onUse={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});
