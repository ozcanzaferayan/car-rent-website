import type { Meta, StoryObj } from "@storybook/react";

import { Wechat } from "@/icons";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Icons = (args: Story) => {
  return (
    <div className="flex flex-1 gap-4">
      <Wechat width={12} height={12} color="dodgerblue" />
      <Wechat width={24} height={24} color="dodgerblue" />
      <Wechat width={48} height={48} color="dodgerblue" />
      <Wechat width={48} height={48} color="tomato" />
    </div>
  );
};
