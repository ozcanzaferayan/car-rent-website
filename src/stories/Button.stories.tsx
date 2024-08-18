import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Primary</Button>,
  args: { variant: "default" },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Secondary</Button>,
  args: { variant: "secondary" },
};

export const Destructive: Story = {
  render: (args) => <Button {...args}>Destructive</Button>,
  args: { variant: "destructive" },
};

export const Outline: Story = {
  render: (args) => <Button {...args}>Outline</Button>,
  args: { variant: "outline" },
};

export const Ghost: Story = {
  render: (args) => <Button {...args}>Ghost</Button>,
  args: { variant: "ghost" },
};

export const Link: Story = {
  render: (args) => <Button {...args}>Link</Button>,
  args: { variant: "link" },
};
