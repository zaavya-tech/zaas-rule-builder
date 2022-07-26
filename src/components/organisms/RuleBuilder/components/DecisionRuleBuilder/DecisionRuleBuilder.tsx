import { Table } from "antd";
import { FC, useState } from "react";
import { DecisionTableBuilder } from "./DecisionTableBuilder";

export const DecisionRuleBuilder: FC = () => {
  const [columns, setColumns] = useState<any[]>([]);

  const onAddField = (columns: any[]) => {
    setColumns([...columns]);
  };

  return (
    <div>
      <DecisionTableBuilder onAddField={onAddField} />
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};
