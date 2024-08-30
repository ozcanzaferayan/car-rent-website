import type { Meta, StoryObj } from "@storybook/react";

import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";
const colors = require("tailwindcss/colors");
console.log({ colors });

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

type Props = {
  name: string;
  value: string;
  className: string;
};

const Color = ({ name, className, value }: Props) => {
  return (
    <div className="flex gap-4 flex-col w-56">
      <div className={cn("h-32", `${className}`)} />
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="font-semibold">{name}</span>
          <span className="font-semibold">
            {className.replace(/[^0-9]/g, "")}
          </span>
        </div>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
};

export const Primary = (args: Story) => {
  return (
    <div className="flex gap-8 flex-wrap">
      <div className="flex flex-col gap-4">
        <span className="font-bold text-2xl">Primary Neutral Palette</span>
        <div className="flex flex-1 gap-4">
          <Color className="bg-primary-900" value="#0a196f" name="Dark" />
          <Color className="bg-primary-800" value="#102587" name="Dark" />
          <Color className="bg-primary-700" value="#1a37a7" name="Dark" />
          <Color className="bg-primary-600" value="#264bc8" name="Dark" />
          <Color className="bg-primary-500" value="#3563e9" name="Default" />
          <Color className="bg-primary-400" value="#658df1" name="Light" />
          <Color className="bg-primary-300" value="#85a8f8" name="Light" />
          <Color className="bg-primary-200" value="#aec8fc" name="Light" />
          <Color className="bg-primary-100" value="#d6e4fd" name="Light" />
          <Color className="bg-primary-0" value="#ffffff" name="White" />
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200" />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-2xl">Success</span>
        <div className="flex flex-1 gap-4">
          <Color className="bg-success-900" value="#3b6506" name="Dark" />
          <Color className="bg-success-800" value="#4c7a0b" name="Dark" />
          <Color className="bg-success-700" value="#659711" name="Dark" />
          <Color className="bg-success-600" value="#7fb519" name="Dark" />
          <Color className="bg-success-500" value="#9cd323" name="Default" />
          <Color className="bg-success-400" value="#bce455" name="Light" />
          <Color className="bg-success-300" value="#d3f178" name="Light" />
          <Color className="bg-success-200" value="#e8faa6" name="Light" />
          <Color className="bg-success-100" value="#f5fcd2" name="Light" />
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200" />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-2xl">Error</span>
        <div className="flex flex-1 gap-4">
          <Color className="bg-error-900" value="#7a0619" name="Dark" />
          <Color className="bg-error-800" value="#930b16" name="Dark" />
          <Color className="bg-error-700" value="#b71112" name="Dark" />
          <Color className="bg-error-600" value="#db2719" name="Dark" />
          <Color className="bg-error-500" value="#ff4423" name="Default" />
          <Color className="bg-error-400" value="#ff7f59" name="Light" />
          <Color className="bg-error-300" value="#ffa37a" name="Light" />
          <Color className="bg-error-200" value="#ffc8a6" name="Light" />
          <Color className="bg-error-100" value="#ffe7d3" name="Light" />
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200" />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-2xl">Warning</span>
        <div className="flex flex-1 gap-4">
          <Color className="bg-warning-900" value="#7a4d0b" name="Dark" />
          <Color className="bg-warning-800" value="#936312" name="Dark" />
          <Color className="bg-warning-700" value="#b7821d" name="Dark" />
          <Color className="bg-warning-600" value="#dba32a" name="Dark" />
          <Color className="bg-warning-500" value="#ffc73a" name="Default" />
          <Color className="bg-warning-400" value="#ffd96b" name="Light" />
          <Color className="bg-warning-300" value="#ffe488" name="Light" />
          <Color className="bg-warning-200" value="#FFFB0" name="Light" />
          <Color className="bg-warning-100" value="#fff8d7" name="Light" />
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200" />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-2xl">Info</span>
        <div className="flex flex-1 gap-4">
          <Color className="bg-info-900" value="#102e7a" name="Dark" />
          <Color className="bg-info-800" value="#1a4393" name="Dark" />
          <Color className="bg-info-700" value="#2a60b7" name="Dark" />
          <Color className="bg-info-600" value="#3d81db" name="Dark" />
          <Color className="bg-info-500" value="#54a6ff" name="Default" />
          <Color className="bg-info-400" value="#7ec2ff" name="Light" />
          <Color className="bg-info-300" value="#9bd3ff" name="Light" />
          <Color className="bg-info-200" value="#bae5ff" name="Light" />
          <Color className="bg-info-100" value="#dcf3ff" name="Light" />
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200" />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-2xl">Secondary</span>
        <div className="flex flex-1 gap-4">
          <Color className="bg-secondary-900" value="#040815" name="Dark" />
          <Color className="bg-secondary-800" value="#080c19" name="Dark" />
          <Color className="bg-secondary-700" value="#0d121f" name="Dark" />
          <Color className="bg-secondary-600" value="#131825" name="Dark" />
          <Color className="bg-secondary-500" value="#1a202c" name="Default" />
          <Color className="bg-secondary-400" value="#596780" name="Light" />
          <Color className="bg-secondary-300" value="#90a3bf" name="Light" />
          <Color className="bg-secondary-200" value="#c3d4e9" name="Light" />
          <Color className="bg-secondary-100" value="#e0e9f4" name="Light" />
        </div>
      </div>
    </div>
  );
};
