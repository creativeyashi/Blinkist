import { ComponentStory } from "@storybook/react";
import BookTemplate from ".";

export default{
    title:'Template/Home',
    component: BookTemplate
}

const Template:ComponentStory<typeof BookTemplate> = (args) => (<BookTemplate {...args} />);

export const BookPage = Template.bind({});
BookPage.args={
    id:1
};