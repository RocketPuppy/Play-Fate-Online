import * as React from "react";
import * as renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import App from "../src/app";

test("/create routes to character create", () => {
  const render = renderer.create(
    <MemoryRouter initialEntries={["/create"]} initialIndex={0}>
      <App />
    </MemoryRouter>
  );

  expect(render.toJSON()).toMatchSnapshot();
});

test("/cheat-sheet routes to cheat sheet", () => {
  const render = renderer.create(
    <MemoryRouter initialEntries={["/cheat-sheet"]} initialIndex={0}>
      <App />
    </MemoryRouter>
  );

  expect(render.toJSON()).toMatchSnapshot();
});

test("/character routes to character page", () => {
  const render = renderer.create(
    <MemoryRouter initialEntries={["/character"]} initialIndex={0}>
      <App />
    </MemoryRouter>
  );

  expect(render.toJSON()).toMatchSnapshot();
});

test("/ renders only links", () => {
  const render = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(render.toJSON()).toMatchSnapshot();
});
