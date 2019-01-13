import * as R from "ramda";
import * as React from "react";
import StatefulForm from "../stateful-form";
import ConsequenceList, {
  Consequence,
  getNextConsequenceLevel,
  maxConsequences
} from "./consequence-list";

interface ConsequenceData {
  normal: Consequence[];
  physical: Consequence[];
  mental: Consequence[];
}

class ConsequenceForm extends StatefulForm<ConsequenceData> {}

const makeConsequence = (level: number): Consequence => ({
  description: "",
  level
});

const initialConsequences = {
  mental: [],
  normal: [makeConsequence(2), makeConsequence(4), makeConsequence(6)],
  physical: []
};

export default () => (
  <div>
    <h2>Consequences</h2>
    <ConsequenceForm
      initialValues={initialConsequences}
      FormComponent={({ fields, onChange }) => (
        <div>
          <h3>Normal</h3>
          <ConsequenceList
            consequences={fields.normal}
            onChange={newConsequences => {
              onChange("normal", newConsequences);
            }}
          />
          <h3>Physical</h3>
          <ConsequenceList
            consequences={fields.physical}
            onChange={newConsequences => {
              onChange("physical", newConsequences);
            }}
          />
          {!maxConsequences(fields.physical) && (
            <button
              onClick={() => {
                const newLevel = getNextConsequenceLevel(fields.physical);
                if (newLevel) {
                  const newConsequences = R.concat(fields.physical, [
                    makeConsequence(newLevel)
                  ]);
                  onChange("physical", newConsequences);
                }
              }}
            >
              Add Consequence
            </button>
          )}
          <h3>Mental</h3>
          <ConsequenceList
            consequences={fields.mental}
            onChange={newConsequences => {
              onChange("mental", newConsequences);
            }}
          />
          {!maxConsequences(fields.mental) && (
            <button
              onClick={() => {
                const newLevel = getNextConsequenceLevel(fields.mental);
                if (newLevel) {
                  const newConsequences = R.concat(fields.mental, [
                    makeConsequence(newLevel)
                  ]);
                  onChange("mental", newConsequences);
                }
              }}
            >
              Add Consequence
            </button>
          )}
        </div>
      )}
    />
  </div>
);
