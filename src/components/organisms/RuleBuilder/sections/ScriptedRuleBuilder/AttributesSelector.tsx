import { Button, Form, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export const AttributeSelector = () => {
  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => (
        <Form.Item label="Select Attributes">
          {fields.map((field, index) => (
            <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
              <Select placeholder="Select Attribute" />

              {fields.length > 1 ? (
                <Button
                  type="primary"
                  icon={<MinusCircleOutlined />}
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                >
                  Remove Above Field
                </Button>
              ) : null}
            </div>
          ))}

          <Form.Item>
            <Button onClick={add}>
              <PlusOutlined /> Add field
            </Button>
          </Form.Item>
        </Form.Item>
      )}
    </Form.List>
  );
};
