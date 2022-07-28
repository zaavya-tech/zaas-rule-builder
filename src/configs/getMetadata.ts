import configs from "./metadata.json";

const data = configs as typeof configs;

type DropdownOption = { value: string; label: string };

export const getDropdownOptions = (): DropdownOption[] => {
  const dropdownOptions: DropdownOption[] = [];

  Object.entries(data).forEach(([specKey, attributes]) => {
    Object.entries(attributes).forEach(([attributeKey]) => {
      const result = `${specKey} / ${attributeKey}`;
      dropdownOptions.push({ value: result, label: result });
    });
  });

  return dropdownOptions;
};
