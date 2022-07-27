import { Button, Col, Form, Input, Radio, Row, Select } from "antd";
import { useState } from "react";
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

export const ConditionalStatement = () => {
  const [statements, setStatements] = useState([1]);

  const onChangeStatement = () =>
    setStatements([...statements, statements.length + 1]);

  return (
    <Form.Item className={styles["conditional-statement"]}>
      {statements.map((statement) => (
        <Row gutter={12} className={styles["conditional-statement-row"]}>
          <Col span={6}>
            <AttributePicker onChangeValue={() => {}} />
          </Col>

          <Col span={6}>
            <Select
              style={{ width: "100%" }}
              placeholder="Select Condition"
              options={operations.map((operation) => ({
                value: operation,
                label: operation,
              }))}
            />
          </Col>

          <Col span={7}>
            <Input placeholder="Your conditional value..." />
          </Col>

          <Col className={styles["conditional-statement-actions"]} span={5}>
            <Radio.Group defaultValue="or" onChange={onChangeStatement}>
              <Radio.Button value="and">AND</Radio.Button>
              <Radio.Button value="or">OR</Radio.Button>
            </Radio.Group>
            <Button type="primary">Delete</Button>
          </Col>
        </Row>
      ))}

      <Button type="dashed" style={{ width: "100%" }}>
        Delete Condition
      </Button>
    </Form.Item>
  );
};
