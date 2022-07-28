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

  const deleteColumn = (deleteIndex: number) => {
    setColumns(columns.filter((column, index) => index !== deleteIndex));
  };

  return (
    <div>
      <DecisionTableBuilder
        fields={columns}
        onAddField={addNewColumn}
        onDeleteField={deleteColumn}
      />
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
              >
                Delete
              </Button>
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
