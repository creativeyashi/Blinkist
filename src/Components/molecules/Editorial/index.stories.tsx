import { ComponentStory } from "@storybook/react";
import Editorial from ".";

export default{
    title:'Molecules/FooterNavigation',
    component:Editorial
}

const Template: ComponentStory<typeof Editorial> = (args) =>(<Editorial {...args}/>);

export const editorial = Template.bind({});
editorial.args={
    listHead:"Editorial",
    listingItems:["Book lists","What is Nonfiction?","What to read next?","Benefits of reding"]
};

export const useful = Template.bind({});
useful.args={
    listHead:"Useful links",
    listingItems:["Pricing","Blinklist business","Gift cards","Blinklist magaine","Contact & help"]
};

export const company = Template.bind({});
company.args={
    listHead:"Company",
    listingItems:["About","Careers","partners","Code of Conduct"]
};