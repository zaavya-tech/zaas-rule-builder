import { useState } from "react";
import { TableColumn } from "./DecisionRuleBuilder";

export const useDecisionRuleBuilder = () => {
  const [columns, setColumns] = useState<TableColumn[]>([]);

  const addNewColumn = (columns: TableColumn[]) => {
    setColumns([...columns]);
  };

  const deleteColumn = (deleteIndex: number) => {
    setColumns(columns.filter((column, index) => index !== deleteIndex));
  };

  return {
    columns,
    addNewColumn,
    deleteColumn,
  };
};
