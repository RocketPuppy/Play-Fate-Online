import * as React from "react";
import * as renderer from "react-test-renderer";
import ConsequenceList from "../../src/character-sheet/consequence-list";

const noop = () => {};

test("renders nothing with no consequences", () => {
  const render = renderer.create(<ConsequenceList consequences={[]} onChange={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});

test("renders a single consequences", () => {
  const consequences = [
    { description: "One", level: 1 }
  ];
  const render = renderer.create(<ConsequenceList consequences={consequences} onChange={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});

test("renders some consequences", () => {
  const consequences = [
    { description: "One", level: 1 },
    { description: "Two", level: 2 },
    { description: "Three", level: 3 }
  ];
  const render = renderer.create(<ConsequenceList consequences={consequences} onChange={noop} />);

  expect(render.toJSON()).toMatchSnapshot();
});
