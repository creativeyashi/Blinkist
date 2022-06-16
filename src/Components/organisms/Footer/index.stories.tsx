import { ComponentStory } from "@storybook/react";
import Footer from ".";

export default{
    title:'Organisms/FooterGrid',
    component: Footer
}

const Template : ComponentStory<typeof Footer> = () => (<Footer></Footer>);

export const footer = Template.bind({});
footer.args={};