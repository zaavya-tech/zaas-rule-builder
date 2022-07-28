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
  onDeleteField: (index: number) => void;
  label?: string;
};

export const DecisionTableBuilder: FC<DecisionTableBuilderProps> = ({
  label,
  fields,
  onAddField,
  onDeleteField,
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
      <h4>Select {label} Columns</h4>

      <Row gutter={12}>
        {fields.map((field, index) => (
          <Col
            span={6}
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
              onClick={() => onDeleteField(index)}
            />
          </Col>
        ))}
        <Col span={9}>
          <Button style={{ marginRight: 10 }} type="primary" onClick={addNewField}>
            Add {label} Column
          </Button>
        </Col>
      </Row>
    </Form.Item>
  );
};
