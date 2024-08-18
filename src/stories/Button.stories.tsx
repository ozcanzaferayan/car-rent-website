import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  //tags: ["autodocs"],
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

export const BaseStory = (args: Story) => (
  <div className="flex flex-col gap-4 max-w-24">
    <Button variant={"default"} {...args}>
      Default
    </Button>
    <Button variant={"destructive"} {...args}>
      Destructive
    </Button>
    <Button variant={"outline"} {...args}>
      Outline
    </Button>
    <Button variant={"secondary"} {...args}>
      Secondary
    </Button>
    <Button variant={"ghost"} {...args}>
      Ghost
    </Button>
    <Button variant={"link"} {...args}>
      Link
    </Button>
  </div>
);

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
