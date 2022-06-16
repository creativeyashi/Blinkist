import { ComponentStory } from "@storybook/react";
import TabsComponent from ".";

export default{
    title:"Molecules/Tabs",
    component:TabsComponent
}

const Template:ComponentStory<typeof TabsComponent> = () => <TabsComponent/>

export const tabsComponent = Template.bind({})
tabsComponent.args={}