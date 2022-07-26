import { Select, Input } from "antd";
import styles from "./DecisionRuleBuilder.module.css";

const operations = ["greater than", "less than", "equals", "not equals"];

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
