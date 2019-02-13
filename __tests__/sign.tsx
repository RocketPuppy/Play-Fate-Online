import * as React from "react";
import * as renderer from "react-test-renderer";
import Sign from "../src/sign";

test("sign renders a plus when number is positive", () => {
  const positiveSign = renderer.create(<Sign num={1} />);

  expect(positiveSign.toJSON()).toMatchSnapshot();
});

test("sign renders a minus when number is negative", () => {
  const negativeSign = renderer.create(<Sign num={-1} />);

  expect(negativeSign.toJSON()).toMatchSnapshot();
});
