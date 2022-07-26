import { Button, Divider, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import { FC, useState } from "react";
import { DecisionTableBuilder } from "./DecisionTableBuilder";
import { MinusCircleOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";

export type TableColumn = ColumnType<Record<string, any>>;

export const DecisionRuleBuilder: FC = () => {
  const [columns, setColumns] = useState<TableColumn[]>([]);
  const [dataSource, setDataSource] = useState<Record<string, any>[]>([]);

  const addNewColumn = (columns: TableColumn[]) => {
    setColumns([...columns]);
  };

  const removeDataRow = (indexToRemove: number) => {
    console.log({ indexToRemove })
    setDataSource(dataSource.filter((data, index) => indexToRemove !== index));
  };

  const addNewDataRow = () => {
    const item = columns.reduce(
      (column, value) => ({ ...value, [column.dataIndex as string]: "" }),
      {}
    );
    const updatedDataSource = [...dataSource, item];
    setDataSource(updatedDataSource);
  };

  return (
    <div>
      <DecisionTableBuilder fields={columns} onAddField={addNewColumn} />
      <Table
        columns={[
          ...columns,
          {
            render: (value, type, index) => (
              <Button
                type="primary"
                icon={<MinusCircleOutlined />}
                onClick={() => removeDataRow(index)}
                className="dynamic-delete-button"
              >Delete</Button>
            ),
          },
        ]}
        dataSource={dataSource}
      />
      <Divider />
      <Button onClick={addNewDataRow} type="dashed">
        <PlusOutlined /> Add Conditon Row
      </Button>
    </div>
  );
};
