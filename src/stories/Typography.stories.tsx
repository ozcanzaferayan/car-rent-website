import type { Meta, StoryObj } from "@storybook/react";

import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

type Props = {
  variant: string;
  size: string;
  leading: string;
  children?: string;
  className?: string;
};

const Text = ({ variant, size, leading, children, className }: Props) => {
  return (
    <div className="grid grid-cols-[100px_50px_50px_1fr] gap-4 items-center">
      <span className="text-xs font-normal">{variant}</span>
      <span className="text-xs font-normal">{size}</span>
      <span className="text-xs font-normal">{leading}</span>
      <span className={cn(`${className}`)}>
        {children || "The quick brown fox jumps over the lazy dog"}
      </span>
    </div>
  );
};

export const Regular = (args: Story) => {
  return (
    <div className="flex flex-1 gap-4 flex-col">
      <span className="text-[40px]">Regular</span>
      <Text
        variant="text-xs"
        size="12px"
        leading="Auto"
        className="text-xs leading-auto"
      />
      <Text
        variant="text-sm"
        size="14px"
        leading="140%"
        className="text-sm leading-140"
      />
      <Text
        variant="text-base"
        size="16px"
        leading="140%"
        className="text-base leading-140"
      />
      <Text
        variant="text-lg"
        size="18px"
        leading="140%"
        className="text-lg leading-140"
      />
      <Text
        variant="text-xl"
        size="20px"
        leading="140%"
        className="text-xl leading-140"
      />
      <Text
        variant="text-2xl"
        size="24px"
        leading="120%"
        className="text-2xl leading-120"
      />
      <Text
        variant="text-3xl"
        size="30px"
        leading="120%"
        className="text-3xl leading-120"
      />
      <Text
        variant="text-4xl"
        size="36px"
        leading="110%"
        className="text-4xl leading-110"
      />
    </div>
  );
};

export const Semibold = (args: Story) => {
  return (
    <div className="flex flex-1 gap-4 flex-col">
      <span className="text-[40px]">Semibold</span>
      <Text
        variant="text-xs"
        size="12px"
        leading="Auto"
        className="font-semibold text-xs leading-auto"
      />
      <Text
        variant="text-sm"
        size="14px"
        leading="140%"
        className="font-semibold text-sm leading-140"
      />
      <Text
        variant="text-base"
        size="16px"
        leading="140%"
        className="font-semibold text-base leading-140"
      />
      <Text
        variant="text-lg"
        size="18px"
        leading="140%"
        className="font-semibold text-lg leading-140"
      />
      <Text
        variant="text-xl"
        size="20px"
        leading="140%"
        className="font-semibold text-xl leading-140"
      />
      <Text
        variant="text-2xl"
        size="24px"
        leading="120%"
        className="font-semibold text-2xl leading-120"
      />
      <Text
        variant="text-3xl"
        size="30px"
        leading="120%"
        className="font-semibold text-3xl leading-120"
      />
      <Text
        variant="text-4xl"
        size="36px"
        leading="110%"
        className="font-semibold text-4xl leading-110"
      />
    </div>
  );
};

export const Bold = (args: Story) => {
  return (
    <div className="flex flex-1 gap-4 flex-col">
      <span className="text-[40px]">Bold</span>
      <Text
        variant="text-xs"
        size="12px"
        leading="Auto"
        className="font-bold text-xs leading-auto"
      />
      <Text
        variant="text-sm"
        size="14px"
        leading="140%"
        className="font-bold text-sm leading-140"
      />
      <Text
        variant="text-base"
        size="16px"
        leading="140%"
        className="font-bold text-base leading-140"
      />
      <Text
        variant="text-lg"
        size="18px"
        leading="140%"
        className="font-bold text-lg leading-140"
      />
      <Text
        variant="text-xl"
        size="20px"
        leading="140%"
        className="font-bold text-xl leading-140"
      />
      <Text
        variant="text-2xl"
        size="24px"
        leading="120%"
        className="font-bold text-2xl leading-120"
      />
      <Text
        variant="text-3xl"
        size="30px"
        leading="120%"
        className="font-bold text-3xl leading-120"
      />
      <Text
        variant="text-4xl"
        size="36px"
        leading="110%"
        className="font-bold text-4xl leading-110"
      />
    </div>
  );
};
