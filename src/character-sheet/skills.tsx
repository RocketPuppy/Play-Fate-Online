import * as R from "ramda";
import * as React from "react";
import { ladderMapping } from "../cheat-sheet/ladder";
import Sign from "../sign";
import StatefulForm from "../stateful-form";
import { mapWithLens } from "../utils";
import AddSkillInput from "./add-skill-input";
import { Skill, SkillRow } from "./skill-types";

interface SkillsData {
  skillRows: SkillRow[];
}

const makeSkillRow = (level: number): SkillRow => ({
  level,
  skills: []
});

const defaultSkills: SkillRow[] = [
  makeSkillRow(5),
  makeSkillRow(4),
  makeSkillRow(3),
  makeSkillRow(2),
  makeSkillRow(1)
];

class SkillsForm extends StatefulForm<SkillsData> {}

export default () => (
  <div>
    <h2>Skills</h2>
    <SkillsForm
      initialValues={{ skillRows: defaultSkills }}
      FormComponent={({ fields, onChange }) => (
        <form>
          {mapWithLens(
            (skillRow, rowLens) => (
              <label>
                <span>{ladderMapping.get(skillRow.level)}</span>
                <span>
                  (<Sign num={skillRow.level} />
                  {skillRow.level})
                </span>
                {mapWithLens(
                  (skillName, skillLens) => (
                    <input
                      defaultValue={skillName}
                      type="text"
                      onChange={e => {
                        const newSkillRows = R.set(
                          R.compose<Skill, Skill[], SkillRow, SkillRow[]>(
                            rowLens,
                            R.lensProp("skills"),
                            skillLens
                          ) as R.Lens,
                          e.target.value,
                          fields.skillRows
                        );
                        onChange("skillRows", newSkillRows);
                      }}
                    />
                  ),
                  skillRow.skills
                )}
                <AddSkillInput
                  onSkillAdd={skill => {
                    const newSkillRows = R.over(
                      R.compose<Skill[], SkillRow, SkillRow[]>(
                        rowLens,
                        R.lensProp("skills")
                      ) as R.Lens,
                      R.append(skill),
                      fields.skillRows
                    );
                    onChange("skillRows", newSkillRows);
                  }}
                />
              </label>
            ),
            fields.skillRows
          )}
        </form>
      )}
    />
  </div>
);
