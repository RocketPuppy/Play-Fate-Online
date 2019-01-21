import * as React from "react";
import { Link, Route } from "react-router-dom";

import CharacterCreation from "./character-creation";
import CharacterSheet from "./character-sheet";
import CheatSheet from "./cheat-sheet";

export default () => (
  <div>
    <Link to="/create">Create your character</Link>
    <Link to="/cheat-sheet">Cheat sheet</Link>
    <Link to="/character">Your character</Link>
    <Route path="/create" component={CharacterCreation} />
    <Route path="/cheat-sheet" component={CheatSheet} />
    <Route path="/character" component={CharacterSheet} />
  </div>
);
