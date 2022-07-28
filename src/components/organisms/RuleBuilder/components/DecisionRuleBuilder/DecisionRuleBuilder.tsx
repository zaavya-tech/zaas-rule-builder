import { Button, Divider, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import { FC, useState } from "react";
import { DecisionTableBuilder } from "./DecisionTableBuilder";
import { MinusCircleOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { useDecisionRuleBuilder } from "./useDecisionRuleBuilder";

export type TableColumn = ColumnType<Record<string, any>>;

export const DecisionRuleBuilder: FC = () => {
  const {
    columns: inputColumns,
    addNewColumn: addNewInputColumn,
    deleteColumn: deleteInputColumn,
  } = useDecisionRuleBuilder();

  const {
    columns: outputColumns,
    addNewColumn: addNewOuputColumn,
    deleteColumn: deleteOuputColumn,
  } = useDecisionRuleBuilder();

  const [dataSource, setDataSource] = useState<Record<string, any>[]>([]);

  const removeDataRow = (indexToRemove: number) => {
    setDataSource(dataSource.filter((data, index) => indexToRemove !== index));
  };

  const addNewDataRow = () => {
    const item = inputColumns.reduce(
      (column, value) => ({ ...value, [column.dataIndex as string]: "" }),
      {}
    );
    const updatedDataSource = [...dataSource, item];
    setDataSource(updatedDataSource);
  };

  return (
    <div>
      <DecisionTableBuilder
        fields={inputColumns}
        onAddField={addNewInputColumn}
        onDeleteField={deleteInputColumn}
        label={"Input"}
      />
      <DecisionTableBuilder
        fields={outputColumns}
        onAddField={addNewOuputColumn}
        onDeleteField={deleteOuputColumn}
        label={"Output"}
      />
      <Table
        style={{ overflowX: 'scroll', display: 'block'  }}
        columns={[
          ...inputColumns,
          ...outputColumns,
          {
            render: (value, type, index) => (
              <Button
                type="link"
                icon={<MinusCircleOutlined />}
                onClick={() => removeDataRow(index)}
                className="dynamic-delete-button"
              />
            ),
          },
        ]}
        dataSource={dataSource}
      />
      <Divider />
      <Button onClick={addNewDataRow} type="primary">
        <PlusOutlined /> Add Condition Row
      </Button>
    </div>
  );
};
