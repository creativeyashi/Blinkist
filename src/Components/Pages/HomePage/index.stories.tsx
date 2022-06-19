import { ComponentStory } from "@storybook/react";
import HomeTemplate from ".";

export default{
    title:'Template/Home',
    component: HomeTemplate
}

const Template:ComponentStory<typeof HomeTemplate> = () => (<HomeTemplate/>);

export const HomePage = Template.bind({});
HomePage.args={};