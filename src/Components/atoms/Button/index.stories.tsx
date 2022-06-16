import { ComponentStory } from "@storybook/react";
import Buttons from ".";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default{
    title:'Atoms/Buttons',
    component:Buttons
}

const Template:ComponentStory<typeof Buttons> = (args) => <Buttons {...args}></Buttons>

export const connect = Template.bind({})
connect.args={
    name:'Connect',
    classing:'connect'
}

export const navItemAdmin = Template.bind({})
navItemAdmin.args={
    name:'Nav Items',
    classing:'explore',
    icon:<AddIcon/>

}

export const navItem = Template.bind({})
navItem.args={
    name:'Nav Items',
    classing:'explore',
    end:<KeyboardArrowDownIcon/>

}

export const library = Template.bind({})
library.args={
    name:'Add to library',
    classing:'library',
    icon:<AddIcon/>

}

export const navItemNoH = Template.bind({})
navItemNoH.args={
    name:'Nav Items',
    classing:'exploreNoH',
    end:<KeyboardArrowDownIcon/>

}