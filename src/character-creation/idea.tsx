import * as React from "react";
import StatefulForm from "../stateful-form";

interface IdeaFields {
  highConcept?: string;
  trouble?: string;
  name?: string;
}

class IdeaForm extends StatefulForm<IdeaFields> {}

export default () => (
  <div>
    <IdeaForm
      initialValues={{}}
      FormComponent={({ fields: { highConcept, trouble, name }, onChange }) => (
        <div>
          <label>
            <span>High Concept</span>
            <input
              type="text"
              placeholder="Disciple of the Ivory Shroud"
              value={highConcept}
              onChange={e => {
                onChange("highConcept", e.target.value);
              }}
            />
          </label>
          <label>
            <span>Trouble</span>
            <input
              type="text"
              placeholder="The manners of a goat"
              value={trouble}
              onChange={e => {
                onChange("trouble", e.target.value);
              }}
            />
          </label>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Landon"
              value={name}
              onChange={e => {
                onChange("name", e.target.value);
              }}
            />
          </label>
        </div>
      )}
    />
  </div>
);