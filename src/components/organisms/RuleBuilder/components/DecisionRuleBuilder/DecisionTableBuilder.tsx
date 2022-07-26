import { Button, Col, Form, Row } from "antd";
import { ColumnType } from "antd/lib/table";
import { FC, useState } from "react";
import { AttributePicker } from "./AttributePicker";
import styles from "./DecisionRuleBuilder.module.css";
import { MinusCircleOutlined } from "@ant-design/icons";

type DecisionTableBuilderProps = {
  onAddField: (fields: Array<any>) => void;
};

export const DecisionTableBuilder: FC<DecisionTableBuilderProps> = ({
  onAddField,
}) => {
  const [fields, setFields] = useState<ColumnType<any>[]>([]);

  const addNewField = () => {
    const updatedFields = [
      ...fields,
      {
        key: `${fields.length}`,
        title: "",
        dataIndex: `${fields.length}`,
      },
    ];
    setFields(updatedFields);
    onAddField(updatedFields);
  };

  return (
    <Form.Item className={styles.builder}>
      <h4>Select Fields (Table Columns)</h4>
      <h5>Please select the list of fields to create a decision table</h5>

      <Row gutter={12}>
        {fields.map((field, index) => (
          <Col
            style={{ display: "flex" }}
            className={styles["attribute-picker-col"]}
            span={4}
            key={index}
          >
            <AttributePicker onChangeValue={console.log} />
            <Button
              type="text"
              icon={<MinusCircleOutlined />}
              className="dynamic-delete-button"
            />
          </Col>
        ))}

        <Col className={styles["attribute-picker-col"]} span={4}>
          <Button type="primary" onClick={addNewField}>
            Add Column
          </Button>
        </Col>
      </Row>
    </Form.Item>
  );
};
