import { TreeSelect } from "antd";
import { FC } from "react";

const { TreeNode } = TreeSelect;

type AttributePickerProps = {
  value?: string;
  onChangeValue: (value: string) => void;
};

export const AttributePicker: FC<AttributePickerProps> = ({
  value,
  onChangeValue,
}) => {
  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChangeValue}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="leaf1" />
          <TreeNode value="leaf2" title="leaf2" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode
            value="leaf3"
            title={<b style={{ color: "#08c" }}>leaf3</b>}
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  );
};
