import { Button, Divider, Select } from "antd";
import { FC, useState } from "react";
import { ConditionalStatement } from "./ConditionalStatement";
import { PlusOutlined } from "@ant-design/icons";

export const StatementRuleBuilder: FC = () => {
  const [conditions, setConditions] = useState([1]);
  return (
    <div>
      {conditions.map((condition, index) => (
        <>
          <ConditionalStatement key={index} />
          {index !== conditions.length - 1 && (
            <Divider>
              <Select
                style={{ width: 200 }}
                options={["AND", "OR"].map((value) => ({
                  value,
                  label: value,
                }))}
              />
            </Divider>
          )}
        </>
      ))}

      <Button
        onClick={() => setConditions([...conditions, conditions.length + 1])}
        type="dashed"
        style={{ width: "100%" }}
      >
        <PlusOutlined /> Add Condition
      </Button>
    </div>
  );
};
