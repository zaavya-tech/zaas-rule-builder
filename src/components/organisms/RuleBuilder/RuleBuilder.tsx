import { Card, Tabs } from "antd";
import { FC } from "react";
import { RuleDescriptionForm } from "./components/RuleDescriptionForm";
import { ScriptedRuleBuilder } from "./components/ScriptedRuleBuilder";
import { DecisionRuleBuilder } from "./components/DecisionRuleBuilder";

const { TabPane } = Tabs;

export const RuleBuilder: FC = () => {
  return (
    <Card title="Rule Engine Builder">
      <RuleDescriptionForm />
      <Tabs defaultActiveKey="1">
        <TabPane tab="Scripted Rule" key="1">
          <ScriptedRuleBuilder />
        </TabPane>
        <TabPane tab="Decision Table" key="2">
          <DecisionRuleBuilder />
        </TabPane>
        <TabPane tab="Statement Rule Engine" key="3">
          Statement Rule Engine Builder
        </TabPane>
      </Tabs>
    </Card>
  );
};
