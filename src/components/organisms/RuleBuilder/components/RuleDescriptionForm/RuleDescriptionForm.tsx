import { Checkbox, Form, Input } from "antd";
import { FC, useState } from "react";

export const RuleDescriptionForm: FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | "optional">(
    "optional"
  );

  return (
    <Form
      form={form}
      layout="horizontal"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={setRequiredMarkType}
      labelCol={{ lg: 3 }}
      wrapperCol={{ lg: 8 }}
      requiredMark={requiredMark}
    >
      <Form.Item label="Rule Name" required>
        <Input placeholder="Name for the Business Rule" />
      </Form.Item>

      <Form.Item label="Rule Identifier" required>
        <Input placeholder="Identifier for the Business Rule" />
      </Form.Item>

      <Form.Item label="Rule Type">
        <Checkbox.Group>
          <Checkbox value="business">Business Rule</Checkbox>
          <Checkbox value="validation">Validation Rule</Checkbox>
          <Checkbox value="transformation">Transformation Rule</Checkbox>
          <Checkbox value="others">Others</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item label="Rule Description">
        <Input.TextArea
          rows={3}
          placeholder="Rule Description (maximum 500 characters)"
        />
      </Form.Item>
    </Form>
  );
};
