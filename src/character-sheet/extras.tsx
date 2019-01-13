import * as R from "ramda";
import * as React from "react";
import StatefulForm from "../stateful-form";
import { mapWithLens } from "../utils";

interface Extra {
  name?: string;
  description?: string;
}

interface ExtraData {
  extras: Extra[];
}

class ExtrasForm extends StatefulForm<ExtraData> {}
class NewExtraForm extends StatefulForm<{ newExtra: Extra | undefined }> {}

const initialExtras = {
  extras: []
};

export default () => (
  <div>
    <h2>Extras</h2>
    <ExtrasForm
      initialValues={initialExtras}
      FormComponent={({ fields, onChange }) => (
        <form>
          <div>
            {mapWithLens(
              (extra, extraLens) => (
                <div>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      defaultValue={extra.name || ""}
                      onChange={e => {
                        const newExtras = R.set(
                          R.compose<string, Extra, Extra[]>(
                            extraLens,
                            R.lensProp("name")
                          ) as R.Lens,
                          e.target.value,
                          fields.extras
                        );
                        onChange("extras", newExtras);
                      }}
                    />
                  </label>
                  <label>
                    <span>Description</span>
                    <textarea
                      value={extra.description || ""}
                      onChange={e => {
                        const newExtras = R.set(
                          R.compose<string, Extra, Extra[]>(
                            extraLens,
                            R.lensProp("description")
                          ) as R.Lens,
                          e.target.value,
                          fields.extras
                        );
                        onChange("extras", newExtras);
                      }}
                    />
                  </label>
                </div>
              ),
              fields.extras
            )}
            <NewExtraForm
              initialValues={{ newExtra: undefined }}
              FormComponent={({
                fields: newExtraFields,
                onChange: newExtraOnChange
              }) => (
                <div>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Izanagi"
                      defaultValue={
                        (newExtraFields.newExtra &&
                          newExtraFields.newExtra.name) ||
                        ""
                      }
                      onChange={e => {
                        const newExtra = R.set(
                          R.lensProp("name"),
                          e.target.value,
                          newExtraFields.newExtra || {}
                        );
                        newExtraOnChange("newExtra", newExtra);
                      }}
                    />
                  </label>
                  <label>
                    <span>Description</span>
                    <textarea
                      value={
                        (newExtraFields.newExtra &&
                          newExtraFields.newExtra.description) ||
                        ""
                      }
                      placeholder="Izanagi is available to help out during conflicts"
                      onChange={e => {
                        const newExtra = R.set(
                          R.lensProp("description"),
                          e.target.value,
                          newExtraFields.newExtra || {}
                        );
                        newExtraOnChange("newExtra", newExtra);
                      }}
                    />
                  </label>
                  <button
                    disabled={!newExtraFields.newExtra}
                    onClick={() => {
                      if (newExtraFields.newExtra) {
                        newExtraOnChange("newExtra", undefined);
                        onChange(
                          "extras",
                          R.concat(fields.extras, [newExtraFields.newExtra])
                        );
                      }
                    }}
                  >
                    Add new extra
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
