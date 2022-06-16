import { ComponentStory } from "@storybook/react";
import ExtendedNav from ".";

export default{
    title:'Organisms/ExtendedNav',
    component:ExtendedNav
}

const Template:ComponentStory<typeof ExtendedNav> = () => (<ExtendedNav/>);

export const navigation = Template.bind({});
navigation.args={
};