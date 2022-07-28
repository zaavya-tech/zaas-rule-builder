import { Select } from "antd";
import { FC, useContext } from "react";
import { getDropdownOptions } from "../../../../../configs/getMetadata";
import { RuleBuilderContext } from "../../RuleBuilder";

type AttributePickerProps = {
  value?: string;
  onChangeValue: (value: string) => void;
};

const dropdownOptions = getDropdownOptions();

export const AttributePicker: FC<AttributePickerProps> = ({
  value,
  onChangeValue,
}) => {
  const { attributes } = useContext(RuleBuilderContext);

  return (
    <Select
      placeholder="Select Attribute"
      value={value}
      onChange={onChangeValue}
      options={[
        ...attributes.map((attribute) => ({
          value: attribute.name,
          label: <strong>${attribute.name}</strong>,
        })),
        ...dropdownOptions,
      ]}
    />
  );
};
