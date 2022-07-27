import { Select, Input } from "antd";
import styles from "./DecisionRuleBuilder.module.css";

const operations = [
  "equals",
  "not equals",
  "less than",
  "greater than",
  "less than or equal",
  "greater than or equal",
  "contains",
  "does not contain"
];

export const DecisionColumn = () => {
  return (
    <div className={styles.decisionColumn}>
      <Select
        placeholder="Select Condition"
        options={operations.map((operation) => ({
          value: operation,
          label: operation,
        }))}
      />
      <Input placeholder="Enter Value" />
    </div>
  );
};
