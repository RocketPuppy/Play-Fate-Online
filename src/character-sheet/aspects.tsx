import * as R from "ramda";
import * as React from "react";
import StatefulForm from "../stateful-form";

interface AspectFields {
  highConcept?: string;
  trouble?: string;
  aspects: {
    all: string[];
    newAspect?: string;
  };
}

class AspectForm extends StatefulForm<AspectFields> {}

export default () => (
  <div>
    <h2>Aspects</h2>
    <AspectForm
      initialValues={{ aspects: { all: [] } }}
      FormComponent={({ fields, onChange }) => (
        <div>
          <label>
            <span>High Concept</span>
            <input
              type="text"
              placeholder="Disciple of the Ivory Shroud"
              value={fields.highConcept || ""}
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
              value={fields.trouble || ""}
              onChange={e => {
                onChange("trouble", e.target.value);
              }}
            />
          </label>
          {fields.aspects.all.map((aspect, i) => (
            <label key={i}>
              <span>Aspect {i + 1}</span>
              <input
                type="text"
                value={aspect}
                onChange={e => {
                  const newAspects = R.update(
                    i,
                    e.target.value,
                    fields.aspects.all
                  );
                  onChange("aspects", {
                    all: newAspects,
                    newAspect: fields.aspects.newAspect
                  });
                }}
              />
            </label>
          ))}
          <label>
            <span>New Aspect</span>
            <input
              type="text"
              placeholder="I owe Old Finn everything"
              value={fields.aspects.newAspect || ""}
              onChange={e => {
                onChange("aspects", {
                  all: fields.aspects.all,
                  newAspect: e.target.value
                });
              }}
            />
          </label>
          <button
            disabled={
              R.isNil(fields.aspects.newAspect) ||
              R.isEmpty(fields.aspects.newAspect)
            }
            onClick={() => {
              if (
                !R.isNil(fields.aspects.newAspect) &&
                !R.isEmpty(fields.aspects.newAspect)
              ) {
                const newAspects = [
                  ...fields.aspects.all,
                  fields.aspects.newAspect
                ];
                onChange("aspects", { all: newAspects, newAspect: "" });
              }
            }}
          >
            Save Aspect
          </button>
        </div>
      )}
    />
  </div>
);
