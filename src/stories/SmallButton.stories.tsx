import type { Meta, StoryObj } from "@storybook/react";

import { TriangleDown, Wechat } from "@/icons";
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

export const SmallPrimaryButtons = (args: Story) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[500px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        <Wechat width={24} height={24} />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Hover</span>{" "}
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
      </Button>{" "}
      <Button variant={"default"} className="bg-primary" {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Pressed</span>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary-700"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Focused</span>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>{" "}
      <Button
        variant={"default"}
        size={"icon"}
        className="ring-1 ring-ring"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Disable</span>
      <Button variant={"default"} disabled {...args}>
        Label
      </Button>
      <Button variant={"default"} disabled {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>{" "}
      <Button variant={"default"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button variant={"default"} size={"icon"} disabled {...args}>
        <Wechat width={16} height={16} />
      </Button>
    </div>
  );
};

export const SmallSecondaryButtons = (args: Story) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[500px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button variant={"secondary"} {...args}>
        Label
      </Button>
      <Button variant={"secondary"} {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Hover</span>{" "}
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
      </Button>{" "}
      <Button variant={"default"} className="bg-primary" {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Pressed</span>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary-700"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Focused</span>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>{" "}
      <Button
        variant={"default"}
        size={"icon"}
        className="ring-1 ring-ring"
        {...args}
      >
        <Wechat width={16} height={16} />
      </Button>
      <span className="font-bold">Disable</span>
      <Button variant={"default"} disabled {...args}>
        Label
      </Button>
      <Button variant={"default"} disabled {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>{" "}
      <Button variant={"default"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <Button variant={"default"} size={"icon"} disabled {...args}>
        <Wechat width={16} height={16} />
      </Button>
    </div>
  );
};

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
