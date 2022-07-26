import { Button, Col, Form, Row } from "antd";
import { FC } from "react";
import { AttributePicker } from "./AttributePicker";
import styles from "./DecisionRuleBuilder.module.css";
import { MinusCircleOutlined } from "@ant-design/icons";
import { TableColumn } from "./DecisionRuleBuilder";
import { DecisionColumn } from "./DecisionColumn";

type DecisionTableBuilderProps = {
  fields: TableColumn[];
  onAddField: (fields: TableColumn[]) => void;
};

export const DecisionTableBuilder: FC<DecisionTableBuilderProps> = ({
  fields,
  onAddField,
}) => {
  const addNewField = () => {
    const updatedFields = [
      ...fields,
      {
        title: "",
        key: `${fields.length}`,
        dataIndex: `${fields.length}`,
        render: () => <DecisionColumn />,
      },
    ];
    onAddField(updatedFields);
  };

  const onChangeSelectField = (value: string, index: number) => {
    const selectedFields = [...fields];
    selectedFields[index].title = value;
    onAddField(selectedFields);
  };

  return (
    <Form.Item className={styles.builder}>
      <h4>Select Fields (Table Columns)</h4>
      <h5>Please select the list of fields to create a decision table</h5>

      <Row gutter={12}>
        {fields.map((field, index) => (
          <Col
            span={4}
            style={{ display: "flex" }}
            className={styles["attribute-picker-col"]}
            key={index}
          >
            <AttributePicker
              onChangeValue={(value) => onChangeSelectField(value, index)}
            />
            <Button
              type="text"
              icon={<MinusCircleOutlined />}
              className="dynamic-delete-button"
            />
          </Col>
        ))}

        <Col className={styles["attribute-picker-col"]} span={4}>
          <Button
            className={styles.addColumn}
            type="primary"
            onClick={addNewField}
          >
            Add Column
          </Button>
        </Col>
      </Row>
    </Form.Item>
  );
};
