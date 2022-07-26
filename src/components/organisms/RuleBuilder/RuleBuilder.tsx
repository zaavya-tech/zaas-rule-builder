import { Tabs } from "antd";
import { FC } from "react";
import { Container } from "../../layouts/Container/Container";
import { ScriptedRuleBuilder } from "./sections/ScriptedRuleBuilder/ScriptedRuleBuilder";

const { TabPane } = Tabs;

export const RuleBuilder: FC = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Scripted Rule" key="1">
          <ScriptedRuleBuilder />
        </TabPane>
        <TabPane tab="Decision Table" key="2">
          Decision Table Rule Builder
        </TabPane>
        <TabPane tab="Statement Rule Engine" key="3">
          Statement Rule Engine Builder
        </TabPane>
      </Tabs>
    </Container>
  );
};
