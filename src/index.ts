import { noEmptyEslintDisable } from "./no-empty-eslint-disable";
import { Rule } from "eslint";

type RuleDict = {
  [id: string]:
    | Rule.RuleModule
    | ((context: Rule.RuleContext) => Rule.RuleListener);
};

export const rules: RuleDict = {
  "no-empty-eslint-disable": noEmptyEslintDisable
};
