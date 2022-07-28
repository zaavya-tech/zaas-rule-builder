import { Button, Divider, Select } from "antd";
import { Fragment, FC, useState } from "react";
import { ConditionalStatement } from "./ConditionalStatement";
import { PlusOutlined } from "@ant-design/icons";
import { OutputStatement } from "./OutputStatement";

const operations = [
  {
    value: "AND",
    label: "AND",
  },
  {
    value: "OR",
    label: "OR",
  },
];

export const StatementRuleBuilder: FC = () => {
  const [conditions, setConditions] = useState([1]);

  const handleAddCondition = () => {
    setConditions([...conditions, conditions.length + 1]);
  };

  const handleDeleteCondition = (deleteIndex: number) => {
    setConditions(
      conditions.filter((condition, index) => deleteIndex !== index)
    );
  };

  return (
    <div>
      {conditions.map((condition, index) => (
        <Fragment key={index}>
          <ConditionalStatement
            key={index}
            onDeleteCondition={() => handleDeleteCondition(index)}
          />

          {index !== conditions.length - 1 && (
            <Divider>
              <Select style={{ width: 200 }} options={operations} />
            </Divider>
          )}
        </Fragment>
      ))}

      <Button
        type="primary"
        onClick={handleAddCondition}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <PlusOutlined /> Add Input Condition
      </Button>

      <OutputStatement />
    </div>
  );
};
