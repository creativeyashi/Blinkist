import { ComponentStory } from "@storybook/react";
import IconButtons from ".";
import { ReactComponent as Search } from "../../../../public/images/search.svg";
import { ReactComponent as Up } from "../../../../public/images/up arrow.svg";
import { ReactComponent as Down } from "../../../../public/images/down arrow.svg";

export default{
    title: 'Atoms/IconButtons',
    component : IconButtons
}

const Template: ComponentStory<typeof IconButtons> = args =>( <IconButtons {...args} />);

export const search = Template.bind({});
search.args={
    children:<Search/>
}

export const up = Template.bind({});
up.args={
    children:<Up/>
}

export const down = Template.bind({});
down.args={
    children:<Down/>
}