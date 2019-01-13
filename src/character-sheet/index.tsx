import * as React from "react";

import Aspects from "./aspects";
import Consequences from "./consequences";
import Extras from "./extras";
import CharacterId from "./id";
import Skills from "./skills";
import StressTrack from "./stress-track";
import Stunts from "./stunts";

export default () => (
  <div>
    <h1>Character Sheet</h1>
    <CharacterId />
    <Aspects />
    <Skills />
    <Stunts />
    <Extras />
    <StressTrack trackName="Physical Stress (Physique)" />
    <StressTrack trackName="Mental Stress (Will)" />
    <Consequences />
  </div>
);
