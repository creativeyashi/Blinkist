import { ComponentStory } from "@storybook/react";
import IconText from ".";
import {ReactComponent as Enterpre} from '../../../../public/images/entrepreneurship.svg';
import {ReactComponent as Time} from '../../../../public/images/time.svg';

export default{
    title:'Atoms/IconText',
    component:IconText
}

const Template : ComponentStory<typeof IconText> = (args)=> (<IconText {...args}/>);

export const entrepreneurship = Template.bind({});
entrepreneurship.args={
    name:'Entrepreneurship',
    icon:<Enterpre style={{height:'24px', width: '24px'}}/>,
    styling:"extended"
};

export const time = Template.bind({});
time.args={
    name:'13-minutes read',
    icon:<Time style={{height:'16.67px', width: '16.67px'}}/>,
    styling:"cardText"
};