import { ComponentStory } from "@storybook/react";
import React from "react";
import Avatars from ".";

export default {
  title: "Atoms/Avatar",
  component: Avatars,
};

const Template: ComponentStory<typeof Avatars> = (args) => (
  <Avatars {...args} />
);

export const S = Template.bind({});
S.args = {
  chars: "S",
};

export const Y = Template.bind({});
Y.args = {
  chars: "Y",
};

export const B = Template.bind({});
B.args = {
  chars: "B",
};
