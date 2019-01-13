import * as React from "react";
import StatefulForm from "../stateful-form";
import { Skill } from "./skill-types";

class NewSkillForm extends StatefulForm<{ newSkill: Skill }> {}

interface AddSkillInputProps {
  onSkillAdd(newSkill: Skill): void;
}

export default ({ onSkillAdd }: AddSkillInputProps) => (
  <NewSkillForm
    initialValues={{ newSkill: "" }}
    FormComponent={({ fields, onChange }) => (
      <form>
        <input
          defaultValue={fields.newSkill}
          type="text"
          placeholder={"Athletics"}
          onChange={e => {
            onChange("newSkill", e.target.value);
          }}
        />
        <button
          disabled={!fields.newSkill}
          onClick={e => {
            if (fields.newSkill) {
              onChange("newSkill", "");
              onSkillAdd(fields.newSkill);
              e.stopPropagation();
              e.preventDefault();
            }
          }}
        >
          Add Skill
        </button>
      </form>
    )}
  />
);
