import type { Meta, StoryObj } from "@storybook/react";

import Image from "next/image";
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

export const PrimaryButtons = (args: Story) => {
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
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={12}
          height={12}
          priority
        />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
        <Image
          className=""
          src="/triangle-down.svg"
          alt="triangle"
          width={12}
          height={12}
          priority
        />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary"
        {...args}
      >
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={16}
          height={16}
          priority
        />
      </Button>
      <span className="font-bold">Hover</span>{" "}
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
      </Button>{" "}
      <Button variant={"default"} className="bg-primary" {...args}>
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={12}
          height={12}
          priority
        />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary" {...args}>
        Label
        <Image
          className=""
          src="/triangle-down.svg"
          alt="triangle"
          width={12}
          height={12}
          priority
        />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary"
        {...args}
      >
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={16}
          height={16}
          priority
        />
      </Button>
      <span className="font-bold">Pressed</span>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={12}
          height={12}
          priority
        />
        Label
      </Button>
      <Button variant={"default"} className="bg-primary-700" {...args}>
        Label
        <Image
          className=""
          src="/triangle-down.svg"
          alt="triangle"
          width={12}
          height={12}
          priority
        />
      </Button>
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-primary-700"
        {...args}
      >
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={16}
          height={16}
          priority
        />
      </Button>
      <span className="font-bold">Focused</span>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        Label
      </Button>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={12}
          height={12}
          priority
        />
        Label
      </Button>
      <Button variant={"default"} className="ring-1 ring-ring" {...args}>
        Label
        <Image
          className=""
          src="/triangle-down.svg"
          alt="triangle"
          width={12}
          height={12}
          priority
        />
      </Button>{" "}
      <Button
        variant={"default"}
        size={"icon"}
        className="ring-1 ring-ring"
        {...args}
      >
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={16}
          height={16}
          priority
        />
      </Button>
      <span className="font-bold">Disable</span>
      <Button variant={"default"} disabled {...args}>
        Label
      </Button>
      <Button variant={"default"} disabled {...args}>
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={12}
          height={12}
          priority
        />
        Label
      </Button>{" "}
      <Button variant={"default"} disabled {...args}>
        Label
        <Image
          className=""
          src="/triangle-down.svg"
          alt="triangle"
          width={12}
          height={12}
          priority
        />
      </Button>
      <Button variant={"default"} size={"icon"} disabled {...args}>
        <Image
          className=""
          src="/wechat.svg"
          alt="wechat"
          width={16}
          height={16}
          priority
        />
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
