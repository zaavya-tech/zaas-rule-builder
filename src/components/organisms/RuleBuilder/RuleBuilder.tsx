import { Card, Tabs } from "antd";
import { FC } from "react";

import { RuleDescriptionForm } from "./components/RuleDescriptionForm";

import { ScriptedRuleBuilder } from "./components/ScriptedRuleBuilder";
import { DecisionRuleBuilder } from "./components/DecisionRuleBuilder";
import { StatementRuleBuilder } from "./components/StatementRuleBuilder";
import { UserDefinedAttributes } from "./components/UserDefinedAttributes/UserDefinedAttributes";

const { TabPane } = Tabs;

export const RuleBuilder: FC = () => {
  return (
    <Card
      title="Rule Engine Builder"
      style={{ maxWidth: 1200, margin: "auto" }}
    >
      <RuleDescriptionForm />

      <UserDefinedAttributes />

      <Tabs defaultActiveKey="1">
        <TabPane tab="Scripted Rule" key="1">
          <ScriptedRuleBuilder />
        </TabPane>
        <TabPane tab="Decision Table" key="2">
          <DecisionRuleBuilder />
        </TabPane>
        <TabPane tab="Statement Rule Engine" key="3">
          <StatementRuleBuilder />
        </TabPane>
      </Tabs>
    </Card>
  );
};
