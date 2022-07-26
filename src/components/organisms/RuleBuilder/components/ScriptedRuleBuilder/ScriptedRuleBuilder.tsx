import CodeEditor from "@uiw/react-textarea-code-editor";
import { Col, Row } from "antd";
import { useState } from "react";
import { AttributeSelector } from "./AttributesSelector";

export const ScriptedRuleBuilder = () => {
  const [code, setCode] =
    useState(`/** Your business rule definition comes here */

function nameForTheBusinessRule(a, b) {\n  return a + b;\n}
`);

  return (
    <Row gutter={24}>
      <Col span={10}>
        <AttributeSelector />
      </Col>

      <Col span={14}>
        <CodeEditor
          value={code}
          language="ts"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            height: 300,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </Col>
    </Row>
  );
};
