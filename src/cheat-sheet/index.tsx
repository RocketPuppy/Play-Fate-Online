import * as React from "react";
import AspectTypes from "./aspect-types";
import Challenges from "./challenges";
import CompellingAspects from "./compelling-aspects";
import Conflicts from "./conflicts";
import Consequences from "./consequences";
import Contests from "./contests";
import EarningFatePoints from "./earning-fate-points";
import FourActions from "./four-actions";
import FourOutcomes from "./four-outcomes";
import GameTime from "./game-time";
import InvokingAspects from "./invoking-aspects";
import Ladder from "./ladder";
import MitigatingDamage from "./mitigating-damage";
import OppositionTypes from "./opposition-types";
import Recovery from "./recovery";
import Refresh from "./refresh";
import SkillRoll from "./skill-roll";
import SpendingFatePoints from "./spending-fate-points";

export default () => (
  <div>
    <h1>Cheat Sheet</h1>
    <Ladder />
    <GameTime />
    <SkillRoll />
    <OppositionTypes />
    <FourOutcomes />
    <FourActions />
    <MitigatingDamage />
    <Consequences />
    <Recovery />
    <AspectTypes />
    <InvokingAspects />
    <CompellingAspects />
    <Refresh />
    <SpendingFatePoints />
    <Challenges />
    <Contests />
    <Conflicts />
    <EarningFatePoints />
  </div>
);
