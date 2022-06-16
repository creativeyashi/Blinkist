import { ComponentStory } from "@storybook/react";
import LibraryTemplate from ".";

export default{
    title:'Template/Home',
    component: LibraryTemplate
}

const Template:ComponentStory<typeof LibraryTemplate> = () => (<LibraryTemplate/>);

export const LibraryPage = Template.bind({});
LibraryPage.args={};