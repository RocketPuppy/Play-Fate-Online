import * as React from "react";
import CharacterIdea from "./idea";
import PhaseTrio from "./phase-trio";
import Skills from "./skills";
import StressConsequences from "./stress-consequences";
import StuntsRefresh from "./stunts-refresh";

export default () => (
  <div>
    <h1>Character Creation</h1>
    <CharacterIdea />
    <PhaseTrio />
    <Skills />
    <StuntsRefresh />
    <StressConsequences />
  </div>
);
