import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";

export const FormSection = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | "optional">(
    "optional"
  );

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={setRequiredMarkType}
      requiredMark={requiredMark}
    >
      <Form.Item label="Rule Name" required>
        <Input placeholder="Name for the Business Rule" />
      </Form.Item>

      <Form.Item label="Rule Identifier" required>
        <Input placeholder="Identifier for the Business Rule" />
      </Form.Item>

      <Form.Item label="Rule Type">
        <Radio.Group>
          <Radio.Button value="small">Business Rule</Radio.Button>
          <Radio.Button value="default">Validation Rule</Radio.Button>
          <Radio.Button value="large">Transformation Rule</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Rule Description">
        <Input.TextArea
          rows={3}
          placeholder="Rule Description (maximum 500 characters)"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
