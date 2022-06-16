import { ComponentStory } from "@storybook/react";
import Banner from ".";

export default{
    title:'Organisms/Banner',
    component: Banner
}

const Template:ComponentStory<typeof Banner> = () => ( <Banner/>);

export const FirstBanner = Template.bind({});
FirstBanner.args={};