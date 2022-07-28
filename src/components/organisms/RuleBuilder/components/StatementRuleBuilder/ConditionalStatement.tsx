import { Button, Col, Form, Input, Radio, Row, Select } from "antd";
import { FC, useState } from "react";
import { AttributePicker } from "../DecisionRuleBuilder/AttributePicker";
import styles from "./StatementRuleBuilder.module.css";

const operations = [
  "equals",
  "not equals",
  "less than",
  "greater than",
  "less than or equal",
  "greater than or equal",
  "contains",
  "does not contain",
];

type ConditionalStatementProps = {
  onDeleteCondition: () => void;
};

export const ConditionalStatement: FC<ConditionalStatementProps> = ({
  onDeleteCondition,
}) => {
  const [statements, setStatements] = useState([1]);

  const renderOptionsDropdown = () => {
    return (
      <Select
        style={{ width: "100%" }}
        placeholder="Select Condition"
        options={operations.map((operation) => ({
          value: operation,
          label: operation,
        }))}
      />
    );
  };

  const handleDeleteStatement = (index: number) =>
    setStatements(statements.filter((s, i) => i !== index));

  const onChangeStatement = () =>
    setStatements([...statements, statements.length + 1]);

  return (
    <div className={styles["conditional-statement"]}>
      <h4>Input Condition</h4>

      <Form.Item className={styles["conditional-statement-item"]}>
        {statements.map((statement, index) => (
          <Row gutter={12} className={styles["conditional-statement-row"]}>
            <Col span={6}>
              <AttributePicker onChangeValue={() => {}} />
            </Col>

            <Col span={6}>{renderOptionsDropdown()}</Col>

            <Col span={7}>
              <Input placeholder="Your conditional value..." />
            </Col>

            <Col className={styles["conditional-statement-actions"]} span={5}>
              <Radio.Group onChange={onChangeStatement}>
                <Radio.Button value="or">OR</Radio.Button>
                <Radio.Button value="and">AND</Radio.Button>
              </Radio.Group>

              <Button
                onClick={() => handleDeleteStatement(index)}
                type="primary"
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}

        <Button
          type="dashed"
          onClick={onDeleteCondition}
          style={{ width: "100%" }}
        >
          Delete Condition
        </Button>
      </Form.Item>
    </div>
  );
};
