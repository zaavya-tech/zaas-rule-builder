import { Card } from "antd";
import React, { createContext, FC, useState } from "react";

import { RuleDescriptionForm } from "./components/RuleDescriptionForm";
import { RuleSections as RuleSectionsTabs } from "./components/RuleSections/RuleSections";
import { UserDefinedAttributes } from "./components/UserDefinedAttributes/UserDefinedAttributes";

export const RuleBuilderContext = createContext<{
  attributes: Attribute[];
  setAttributes: React.Dispatch<React.SetStateAction<Attribute[]>> | undefined;
}>({ attributes: [], setAttributes: undefined });

type Attribute = {
  name: string;
  type: string;
};

export const RuleBuilder: FC = () => {
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  return (
    <Card
      title="Rule Engine Builder"
      style={{ maxWidth: 1200, margin: "auto" }}
    >
      <RuleBuilderContext.Provider value={{ attributes, setAttributes }}>
        <RuleDescriptionForm />
        <UserDefinedAttributes />
        <RuleSectionsTabs />
      </RuleBuilderContext.Provider>
    </Card>
  );
};
