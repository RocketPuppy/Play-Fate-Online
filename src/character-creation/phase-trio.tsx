import * as React from "react";
import StatefulForm from "../stateful-form";
import { PhaseInfo, PhaseTrio } from "./types";

type InProgressPhaseTrio = PhaseTrio<Partial<PhaseInfo>>;

const initialPhaseTrio: InProgressPhaseTrio = {
  adventure: {},
  firstCrossing: {},
  secondCrossing: {}
};

class PhaseTrioForm extends StatefulForm<InProgressPhaseTrio> {}

const adventureBackstoryPlaceholder: string =
  "Landon gets into a bar fight with some of the scar triad. He is robbed of his sword and beaten severely. His life is saved by a veteran soldier named Old Finn. Finn helps to heal Landon, clean him up, and enlist him in the town militia.";

const firstCrossingBackstoryPlaceholder: string =
  "Zird the Arcane hires Landon to quietly break into the Tower of Unrest at the Collegia. When their cover is blown, Landon kicks out the tower’s supporting pillars. The two escape as the structure comes crashing down.";

const secondCrossingBackstoryPlaceholder: string =
  "Cynere drags Landon into a bar fight with warriors from the Dianan Sisterhood. He gets cut across one eye, leaving him half-blinded and scarred. Later, she provides him the chance for vengeance by helping her steal an artifact from them.";

export default () => (
  <div>
    <h2>Phase Trio</h2>
    <PhaseTrioForm
      initialValues={initialPhaseTrio}
      FormComponent={({ fields, onChange }) => (
        <div>
          <label>
            <span>Phase 1: Your Adventure</span>
            <textarea
              placeholder={adventureBackstoryPlaceholder}
              value={fields.adventure.backstory}
              onChange={e => {
                onChange("adventure", {
                  ...fields.adventure,
                  backstory: e.target.value
                });
              }}
            />
          </label>
          <label>
            <span>Phase 1: Aspect</span>
            <input
              type="text"
              placeholder="I owe old Finn everything"
              value={fields.adventure.aspect}
              onChange={e => {
                onChange("adventure", {
                  ...fields.adventure,
                  aspect: e.target.value
                });
              }}
            />
          </label>
          <label>
            <span>Phase 2: First Crossing Paths</span>
            <textarea
              placeholder={firstCrossingBackstoryPlaceholder}
              value={fields.firstCrossing.backstory}
              onChange={e => {
                onChange("firstCrossing", {
                  ...fields.firstCrossing,
                  backstory: e.target.value
                });
              }}
            />
          </label>
          <label>
            <span>Phase 2: Aspect</span>
            <input
              type="text"
              placeholder="Smashing is always an option"
              value={fields.firstCrossing.aspect}
              onChange={e => {
                onChange("firstCrossing", {
                  ...fields.firstCrossing,
                  aspect: e.target.value
                });
              }}
            />
          </label>
          <label>
            <span>Phase 3: Second Crossing Paths</span>
            <textarea
              placeholder={secondCrossingBackstoryPlaceholder}
              value={fields.secondCrossing.backstory}
              onChange={e => {
                onChange("secondCrossing", {
                  ...fields.secondCrossing,
                  backstory: e.target.value
                });
              }}
            />
          </label>
          <label>
            <span>Phase 3: Aspect</span>
            <input
              type="text"
              placeholder="An eye for an eye"
              value={fields.secondCrossing.aspect}
              onChange={e => {
                onChange("secondCrossing", {
                  ...fields.secondCrossing,
                  aspect: e.target.value
                });
              }}
            />
          </label>
        </div>
      )}
    />
  </div>
);
