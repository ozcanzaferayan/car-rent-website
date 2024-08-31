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
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[700px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button size={"lg"} variant={"default"} {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"default"} {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button size={"lg"} variant={"default"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"default"} {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Hover</span>{" "}
      <Button size={"lg"} variant={"default"} {...args}>
        Label
      </Button>{" "}
      <Button size={"lg"} variant={"default"} {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button size={"lg"} variant={"default"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"default"} {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Pressed</span>
      <Button
        size={"lg"}
        variant={"default"}
        className="bg-primary-700"
        {...args}
      >
        Label
      </Button>
      <Button
        size={"lg"}
        variant={"default"}
        className="bg-primary-700"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        size={"lg"}
        variant={"default"}
        className="bg-primary-700"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-primary-700"
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Focused</span>
      <Button
        size={"lg"}
        variant={"default"}
        className="ring-1 ring-ring"
        {...args}
      >
        Label
      </Button>
      <Button
        size={"lg"}
        variant={"default"}
        className="ring-1 ring-ring"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        size={"lg"}
        variant={"default"}
        className="ring-1 ring-ring"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>{" "}
      <div>
        <Button
          variant={"default"}
          size={"lg"}
          className="ring-1 ring-ring"
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Disable</span>
      <Button size={"lg"} variant={"default"} disabled {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"default"} disabled {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>{" "}
      <Button size={"lg"} variant={"default"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"default"} disabled {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};

export const Secondary = (args: Story) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[700px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button size={"lg"} variant={"secondary"} {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"secondary"} {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button size={"lg"} variant={"secondary"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"secondary"} {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Hover</span>
      <Button
        variant={"secondary"}
        size={"lg"}
        className="border-secondary-400 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"secondary"}
        size={"lg"}
        className="border-secondary-400 text-secondary-500"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        variant={"secondary"}
        size={"lg"}
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
          size={"lg"}
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Pressed</span>
      <Button
        variant={"secondary"}
        size={"lg"}
        className="bg-primary-100 border-secondary-300 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"secondary"}
        size={"lg"}
        className="bg-primary-100 border-secondary-300 text-secondary-500"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        variant={"secondary"}
        size={"lg"}
        className="bg-primary-100 border-secondary-300 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="bg-primary-100 border-secondary-300 text-secondary-500"
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Focused</span>
      <Button size={"lg"} variant={"secondary"} {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"secondary"} {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button size={"lg"} variant={"secondary"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>{" "}
      <div>
        <Button size={"lg"} variant={"secondary"} {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Disable</span>
      <Button size={"lg"} variant={"secondary"} disabled {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"secondary"} disabled {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>{" "}
      <Button size={"lg"} variant={"secondary"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"secondary"} disabled {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};

export const Minimal = (args: Story) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4 max-w-[700px]">
      <span className="font-bold"></span>
      <span className="font-bold">Label</span>
      <span className="font-bold">Icon-Left</span>
      <span className="font-bold">Icon-Right</span>
      <span className="font-bold">Icon Only</span>
      <span className="font-bold">Enabled</span>
      <Button size={"lg"} variant={"ghost"} {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"ghost"} {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button size={"lg"} variant={"ghost"} {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"ghost"} {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Hover</span>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="bg-primary-0 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="bg-primary-0 text-secondary-500"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
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
          size={"lg"}
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Pressed</span>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="bg-primary-100 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="bg-primary-100 text-secondary-500"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="bg-primary-100 text-secondary-500"
        {...args}
      >
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button
          variant={"ghost"}
          size={"lg"}
          className="bg-primary-100 text-secondary-500"
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Focused</span>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="border border-secondary-100 text-secondary-500"
        {...args}
      >
        Label
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
        className="border border-secondary-100 text-secondary-500"
        {...args}
      >
        <Wechat width={18} height={18} />
        Label
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
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
          size={"lg"}
          {...args}
        >
          <Wechat width={18} height={18} />
        </Button>
      </div>
      <span className="font-bold">Disable</span>
      <Button size={"lg"} variant={"ghost"} disabled {...args}>
        Label
      </Button>
      <Button size={"lg"} variant={"ghost"} disabled {...args}>
        <Wechat width={18} height={18} />
        Label
      </Button>{" "}
      <Button size={"lg"} variant={"ghost"} disabled {...args}>
        Label
        <TriangleDown width={12} height={12} />
      </Button>
      <div>
        <Button size={"lg"} variant={"ghost"} disabled {...args}>
          <Wechat width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};
