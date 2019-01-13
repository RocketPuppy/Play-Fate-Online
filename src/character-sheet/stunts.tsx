import * as R from "ramda";
import * as React from "react";
import StatefulForm from "../stateful-form";
import { mapWithLens } from "../utils";

interface Stunt {
  name?: string;
  description?: string;
}

interface StuntData {
  stunts: Stunt[];
}

class StuntsForm extends StatefulForm<StuntData> {}
class NewStuntForm extends StatefulForm<{ newStunt: Stunt | undefined }> {}

const initialStunts = {
  stunts: []
};

export default () => (
  <div>
    <h2>Stunts</h2>
    <StuntsForm
      initialValues={initialStunts}
      FormComponent={({ fields, onChange }) => (
        <form>
          <div>
            {mapWithLens(
              (stunt, stuntLens) => (
                <div>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      defaultValue={stunt.name || ""}
                      onChange={e => {
                        const newStunts = R.set(
                          R.compose<string, Stunt, Stunt[]>(
                            stuntLens,
                            R.lensProp("name")
                          ) as R.Lens,
                          e.target.value,
                          fields.stunts
                        );
                        onChange("stunts", newStunts);
                      }}
                    />
                  </label>
                  <label>
                    <span>Description</span>
                    <textarea
                      value={stunt.description || ""}
                      onChange={e => {
                        const newStunts = R.set(
                          R.compose<string, Stunt, Stunt[]>(
                            stuntLens,
                            R.lensProp("description")
                          ) as R.Lens,
                          e.target.value,
                          fields.stunts
                        );
                        onChange("stunts", newStunts);
                      }}
                    />
                  </label>
                </div>
              ),
              fields.stunts
            )}
            <NewStuntForm
              initialValues={{ newStunt: undefined }}
              FormComponent={({
                fields: newStuntFields,
                onChange: newStuntOnChange
              }) => (
                <div>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Lucky"
                      defaultValue={
                        (newStuntFields.newStunt &&
                          newStuntFields.newStunt.name) ||
                        ""
                      }
                      onChange={e => {
                        const newStunt = R.set(
                          R.lensProp("name"),
                          e.target.value,
                          newStuntFields.newStunt || {}
                        );
                        newStuntOnChange("newStunt", newStunt);
                      }}
                    />
                  </label>
                  <label>
                    <span>Description</span>
                    <textarea
                      value={
                        (newStuntFields.newStunt &&
                          newStuntFields.newStunt.description) ||
                        ""
                      }
                      placeholder="Once per session you may roll a single dice to resolve a test. If you don't fail, succeed with style automatically."
                      onChange={e => {
                        const newStunt = R.set(
                          R.lensProp("description"),
                          e.target.value,
                          newStuntFields.newStunt || {}
                        );
                        newStuntOnChange("newStunt", newStunt);
                      }}
                    />
                  </label>
                  <button
                    disabled={!newStuntFields.newStunt}
                    onClick={() => {
                      if (newStuntFields.newStunt) {
                        newStuntOnChange("newStunt", undefined);
                        onChange(
                          "stunts",
                          R.concat(fields.stunts, [newStuntFields.newStunt])
                        );
                      }
                    }}
                  >
                    Add new stunt
                  </button>
                </div>
              )}
            />
          </div>
        </form>
      )}
    />
  </div>
);
