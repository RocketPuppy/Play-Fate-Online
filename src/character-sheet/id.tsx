import * as React from "react";
import StatefulForm from "../stateful-form";

interface IdFields {
  name?: string;
  description?: string;
  refresh?: number;
}

class IdForm extends StatefulForm<IdFields> {}

const descriptionPlaceholder: string =
  "A rough-mannered swordsman covered in ragged clothing.";

export default () => (
  <div>
    <h2>Id</h2>
    <IdForm
      initialValues={{}}
      FormComponent={({ fields, onChange }) => (
        <div>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Landon"
              value={fields.name}
              onChange={e => {
                onChange("name", e.target.value);
              }}
            />
          </label>
          <label>
            <span>Description</span>
            <textarea
              placeholder={descriptionPlaceholder}
              value={fields.description}
              onChange={e => {
                onChange("description", e.target.value);
              }}
            />
          </label>
          <label>
            <span>Refresh</span>
            <input
              type="number"
              placeholder="3"
              value={fields.refresh}
              onChange={e => {
                onChange("refresh", parseInt(e.target.value, 10));
              }}
            />
          </label>
        </div>
      )}
    />
  </div>
);
