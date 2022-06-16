import { ComponentStory } from "@storybook/react";
import CardsList from ".";

export default{
    title: "Molecules/CardsList",
    component: CardsList
}

const Template : ComponentStory<typeof CardsList> = (args) => ( <CardsList {...args}/> );

export const zeroProgress = Template.bind({});
zeroProgress.args={
    librarybu:true,
    checkComplete:0
};

export const thirtyOneProgress = Template.bind({});
thirtyOneProgress.args={
    finished:true,
    checkComplete:31
};

export const hundredProgress = Template.bind({});
hundredProgress.args={
    readAgain:true,
    checkComplete:100
};
