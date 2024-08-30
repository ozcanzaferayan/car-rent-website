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

export const Primary = (args: Story) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[500px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button variant={"default"} {...args}>
        Label
      </Button>
      <Button variant={"default"} {...args}>
        <Wechat width={14} height={14} />
        Label
      </Button>
      <Button variant={"default"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button variant={"default"} {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Hover</span>{" "}
      <Button variant={"default"} {...args}>
        Label
      </Button>{" "}
      <Button variant={"default"} {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"default"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button variant={"default"} {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
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
      <div>
        <Button variant={"default"} className="bg-primary-700" {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
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
      <div>
        <Button variant={"default"} className="ring-1 ring-ring" {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
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
      <div>
        <Button variant={"default"} disabled {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};

export const Secondary = (args: Story) => {
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
      <Button variant={"secondary"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button variant={"secondary"} {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Hover</span>
      <Button
        variant={"secondary"}
        className="border-secondary-400 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"secondary"}
        className="border-secondary-400 text-secondary-500"
        {...args}
      >
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button
        variant={"secondary"}
        className="border-secondary-400 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"secondary"}
          className="border-secondary-400 text-secondary-500"
          {...args}
        >
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Pressed</span>
      <Button
        variant={"secondary"}
        className="bg-primary-100 border-secondary-300 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"secondary"}
        className="bg-primary-100 border-secondary-300 text-secondary-500"
        {...args}
      >
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button
        variant={"secondary"}
        className="bg-primary-100 border-secondary-300 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"secondary"}
          className="bg-primary-100 border-secondary-300 text-secondary-500"
          {...args}
        >
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Focused</span>
      <Button variant={"secondary"} {...args}>
        Label
      </Button>
      <Button variant={"secondary"} {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"secondary"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>{" "}
      <div>
        <Button variant={"secondary"} {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Disable</span>
      <Button variant={"secondary"} disabled {...args}>
        Label
      </Button>
      <Button variant={"secondary"} disabled {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>{" "}
      <Button variant={"secondary"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button variant={"secondary"} disabled {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};

export const Minimal = (args: Story) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[500px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button variant={"ghost"} {...args}>
        Label
      </Button>
      <Button variant={"ghost"} {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button variant={"ghost"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button variant={"ghost"} {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Hover</span>
      <Button
        variant={"ghost"}
        className="bg-primary-0 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"ghost"}
        className="bg-primary-0 text-secondary-500"
        {...args}
      >
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button
        variant={"ghost"}
        className="bg-primary-0 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"ghost"}
          className="bg-primary-0 text-secondary-500"
          {...args}
        >
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Pressed</span>
      <Button
        variant={"ghost"}
        className="bg-primary-100 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"ghost"}
        className="bg-primary-100 text-secondary-500"
        {...args}
      >
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button
        variant={"ghost"}
        className="bg-primary-100 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"ghost"}
          className="bg-primary-100 text-secondary-500"
          {...args}
        >
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Focused</span>
      <Button
        variant={"ghost"}
        className="border border-secondary-100 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"ghost"}
        className="border border-secondary-100 text-secondary-500"
        {...args}
      >
        <Wechat width={12} height={12} />
        Label
      </Button>
      <Button
        variant={"ghost"}
        className="border border-secondary-100 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>{" "}
      <div>
        <Button
          variant={"ghost"}
          className="border border-secondary-100 text-secondary-500"
          {...args}
        >
          <Wechat width={16} height={16} />
        </Button>
      </div>
      <span className="font-bold">Disable</span>
      <Button variant={"ghost"} disabled {...args}>
        Label
      </Button>
      <Button variant={"ghost"} disabled {...args}>
        <Wechat width={12} height={12} />
        Label
      </Button>{" "}
      <Button variant={"ghost"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button variant={"ghost"} disabled {...args}>
          <Wechat width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};
