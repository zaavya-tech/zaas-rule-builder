import { Popover, Button, Input, Select, Divider, Tag } from "antd";
import { FC, useCallback, useContext, useMemo, useState } from "react";
import { RuleBuilderContext } from "../../RuleBuilder";
import styles from "./UserDefinedAttributes.module.css";

const typeOptions = [
  {
    label: "String",
    value: "String",
  },
  {
    label: "Number",
    value: "Number",
  },
  {
    label: "Boolean",
    value: "Boolean",
  },
  {
    label: "Object",
    value: "Object",
  },
  {
    label: "Date",
    value: "Date",
  },
  {
    label: "Regex",
    value: "Regex",
  },
];

type Attribute = {
  name: string;
  type: string;
};

export const UserDefinedAttributes: FC = () => {
  const { attributes, setAttributes } = useContext(RuleBuilderContext);
  const [newAttribute, setNewAttribute] = useState<Attribute>();

  const onChangeValue = useCallback((key: keyof Attribute, value: string) => {
    setNewAttribute(
      (attribute) => ({ ...attribute, [key]: value } as Attribute)
    );
  }, []);

  const addAttribute = useCallback(() => {
    setAttributes?.((attributes) => [...attributes, newAttribute as Attribute]);
    setNewAttribute({ name: "", type: "" });
  }, [setAttributes, newAttribute]);

  const content = useMemo(
    () => (
      <div className={styles.form}>
        <Input
          onChange={(event) => onChangeValue("name", event.target.value)}
          className={styles["form-control"]}
          placeholder="Attribute Name"
        />

        <Select
          options={typeOptions}
          onChange={(value) => onChangeValue("type", value)}
          className={styles["form-control"]}
          placeholder="Select Attribute Type"
        />

        <Button
          type="primary"
          onClick={addAttribute}
          disabled={!newAttribute?.name || !newAttribute.type}
        >
          Add Attribute
        </Button>
      </div>
    ),
    [newAttribute, addAttribute, onChangeValue]
  );

  return (
    <div>
      <Divider></Divider>
      <h4>Add Custom Attributes</h4>
      <h5 style={{ marginBottom: 20 }}>
        You can define your custom attributes for rule definition and can use
        anywhere!
      </h5>

      <Popover content={content} title="Add Custom Attribute" trigger="click">
        <Button type="primary">Add Custom Attributes</Button>
      </Popover>

      <div style={{ marginTop: 10 }}>
        {attributes.map((attribute) => (
          <Tag key={attribute.name} color={"blue"}>
            {attribute.name} :: {attribute.type}
          </Tag>
        ))}
      </div>
      <Divider></Divider>
    </div>
  );
};
