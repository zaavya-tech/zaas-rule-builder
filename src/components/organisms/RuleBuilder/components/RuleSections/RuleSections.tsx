import { Tabs } from "antd";

import { ScriptedRuleBuilder } from "../ScriptedRuleBuilder";
import { DecisionRuleBuilder } from "../DecisionRuleBuilder";
import { StatementRuleBuilder } from "../StatementRuleBuilder";
import { FC } from "react";

const { TabPane } = Tabs;

export const RuleSections: FC = () => {
  return (
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
  );
};
