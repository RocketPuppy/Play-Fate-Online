import * as R from "ramda";
import * as React from "react";
import StatefulForm from "../stateful-form";
import { mapWithLens } from "../utils";
import StressBox from "./stress-box";

interface Stressor {
  level: number;
  used: boolean;
}

class StressForm extends StatefulForm<{ stresses: Stressor[] }> {}

interface Props {
  trackName: string;
}

const makeStress = (level: number): Stressor => ({
  level,
  used: false
});

const initialStress = {
  stresses: [makeStress(1), makeStress(2)]
};

export default ({ trackName }: Props) => (
  <div>
    <h2>{trackName}</h2>
    <StressForm
      initialValues={initialStress}
      FormComponent={({ fields, onChange }) => (
        <div>
          {mapWithLens(
            (stress, stressLens) => (
              <StressBox
                key={stress.level}
                stressLevel={stress.level}
                used={stress.used}
                onUse={used => {
                  const newStresses = R.set(
                    R.compose<boolean, Stressor, Stressor[]>(
                      stressLens,
                      R.lensProp("used")
                    ) as R.Lens,
                    used,
                    fields.stresses
                  );
                  onChange("stresses", newStresses);
                }}
              />
            ),
            fields.stresses
          )}
          <button
            onClick={() => {
              const maxStress = R.reduce(
                R.max,
                0,
                R.map(s => R.prop("level", s), fields.stresses)
              );
              const newStresses = R.concat(fields.stresses, [
                makeStress(maxStress + 1)
              ]);

              onChange("stresses", newStresses);
            }}
          >
            Add Stress
          </button>
        </div>
      )}
    />
  </div>
);
