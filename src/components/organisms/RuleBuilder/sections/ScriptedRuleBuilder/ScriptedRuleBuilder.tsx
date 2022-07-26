import { Col, Row } from "antd";
import { FC } from "react";
import { FormSection } from "./FormSection";
import { EditorSection } from "./EditorSection";

export const ScriptedRuleBuilder: FC = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <FormSection />
      </Col>
      <Col span={12}>
        <EditorSection />
      </Col>
    </Row>
  );
};
