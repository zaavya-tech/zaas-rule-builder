import { Button, Form, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export const AttributeSelector = () => {
  return (
    <Form layout="horizontal">
      <Form.List name="fields">
        {(fields, { add, remove }) => (
          <Form.Item label="Input Parameters">
            {fields.map((field, index) => (
              <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                <Select placeholder="Select Attribute" />

                <Button
                  type="text"
                  icon={<MinusCircleOutlined />}
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                />
              </div>
            ))}

            <Form.Item>
              <Button onClick={add} style={{ width: "100%" }}>
                <PlusOutlined /> Add field
              </Button>
            </Form.Item>
          </Form.Item>
        )}
      </Form.List>
    </Form>
  );
};
