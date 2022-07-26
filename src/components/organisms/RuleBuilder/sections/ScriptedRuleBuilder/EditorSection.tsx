import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";

export const EditorSection = () => {
  const [code, setCode] = useState(`/** Your business rule definition comes here */

function nameForTheBusinessRule(a, b) {\n  return a + b;\n}
`
);

  return (
    <div>
      <h4>Your logic comes here!</h4>
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
    </div>
  );
};
