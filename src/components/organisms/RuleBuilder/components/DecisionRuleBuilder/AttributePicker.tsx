import { Select } from "antd";
import { FC } from "react";
import { getDropdownOptions } from "../../../../../configs/getMetadata";

type AttributePickerProps = {
  value?: string;
  onChangeValue: (value: string) => void;
};

const dropdownOptions = getDropdownOptions();

export const AttributePicker: FC<AttributePickerProps> = ({
  value,
  onChangeValue,
}) => {
  return (
    <Select
      placeholder="Select Attribute"
      value={value}
      onChange={onChangeValue}
      options={dropdownOptions}
    />
  );
};
