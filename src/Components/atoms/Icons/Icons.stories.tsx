import { ComponentStory } from "@storybook/react";
import Icons from "./Icons";
import Nature from "../../../../public/images/nature.svg";
import Add from "../../../../public/images/add.svg";
import Search from "../../../../public/images/search.svg";
import Cas from "../../../../public/images/career and success.svg";
import Check from "../../../../public/images/check.svg";
import ComSkills from "../../../../public/images/communication skills.svg";
import CorpCul from "../../../../public/images/corporate culture.svg";
import Down from "../../../../public/images/down arrow.svg";
import Up from "../../../../public/images/up arrow.svg";
import Logo from "../../../../public/images/logo.svg";

export default{
    title: "Atoms/Icons",
    component: Icons
}


const Template:ComponentStory<typeof Icons> = args => (<Icons {...args}/>);

export const nature = Template.bind({});
nature.args={
    source: Nature
}

export const add = Template.bind({});
add.args={
    source: Add
}

export const career = Template.bind({});
career.args={
    source: Cas
}

export const check = Template.bind({});
check.args={
    source: Check
}

export const communication = Template.bind({});
communication.args={
    source: ComSkills
}

export const corporate = Template.bind({});
corporate.args={
    source: CorpCul
}

export const down = Template.bind({});
down.args={
    source: Down
}

export const search = Template.bind({});
search.args={
    source: Search
}

export const up = Template.bind({});
up.args={
    source: Up
}

export const logo = Template.bind({});
logo.args={
    source: Logo
}