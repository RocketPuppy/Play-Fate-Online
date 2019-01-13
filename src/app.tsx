import * as React from "react";

import CharacterCreation from "./character-creation";
import CharacterSheet from "./character-sheet";
import CheatSheet from "./cheat-sheet";

export default () => (
  <div>
    <CharacterCreation />
    <CheatSheet />
    <CharacterSheet />
  </div>
);
