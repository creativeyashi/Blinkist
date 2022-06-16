import { ComponentStory } from "@storybook/react";
import Header from ".";

export default{
    title:'Organisms/Header',
    component:Header
}

const Template : ComponentStory<typeof Header> = (args) => (<Header {...args}/>);

export const headerLogedIn = Template.bind({});
headerLogedIn.args={
    avatarIcon:false
};

export const headerLogedInWithAvathar = Template.bind({});
headerLogedInWithAvathar.args={
    avatarIcon:true
};