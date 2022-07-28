import { Button, Col, Form, Input, Row } from "antd";
import { FC, useState } from "react";
import { AttributePicker } from "../DecisionRuleBuilder/AttributePicker";
import styles from "./StatementRuleBuilder.module.css";

type OutputStatementProps = {};

export const OutputStatement: FC<OutputStatementProps> = () => {
  const [statements, setStatements] = useState([1]);

  const handleDeleteStatement = (index: number) =>
    setStatements(statements.filter((s, i) => i !== index));

  const addMoreStatement = () =>
    setStatements([...statements, statements.length + 1]);

  return (
    <div className={styles["output-statement"]}>
      <h4>Output Condition</h4>

      <Form.Item className={styles["output-statement-item"]}>
        {statements.map((statement, index) => (
          <Row gutter={12} className={styles["conditional-statement-row"]}>
            <Col span={6}>
              <AttributePicker onChangeValue={() => {}} />
            </Col>

            <Col span={13}>
              <Input placeholder="Your statement..." />
            </Col>

            <Col className={styles["conditional-statement-actions"]} span={5}>
              <Button type="primary" onClick={addMoreStatement}>
                Add Statement
              </Button>
              <Button
                type="primary"
                onClick={() => handleDeleteStatement(index)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Form.Item>
    </div>
  );
};
