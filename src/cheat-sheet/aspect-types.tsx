import * as React from "react";

export default () => (
  <div>
    <h2>Aspect Types</h2>
    <dl>
      <dt>Game aspects</dt>
      <dd>permanent, made during game creation</dd>
      <dt>Character aspects</dt>
      <dd>permanent, made during character creation</dd>
      <dt>Situation aspects</dt>
      <dd>last for a scene, until overcome, or until irrelevant</dd>
      <dt>Boosts</dt>
      <dd>last until invoked one time</dd>
      <dt>Consequences</dt>
      <dd>last until recovered</dd>
    </dl>
  </div>
);
