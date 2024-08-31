import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Car, GasStation, Heart, Profile2User } from "@/icons";
import Image from "next/image";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const WebView = (args: Story) => {
  return (
    <Card className="w-full max-w-sm sm:max-w-none">
      <CardHeader className="flex flex-row justify-between relative pb-0">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">CR - V</span>
          <span className="text-sm font-semibold">SUV</span>
        </div>
        <Button variant={"ghost"} className="absolute right-6 top-4">
          <Heart width={24} height={24} color="dodgerblue" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row">
        <div className="relative overflow-hidden w-full h-24 my-12">
          <Image
            src="/Car.png"
            alt={"Car"}
            fill
            className="object-contain w-full h-fit"
          />
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white" />
        </div>

        <div className="flex justify-between gap-4 sm:flex-col sm:justify-center">
          <div className="flex items-center gap-1.5 text-secondary-300">
            <GasStation width={24} height={24} />
            <span className="text-sm">80L</span>
          </div>
          <div className="flex items-center gap-1.5 text-secondary-300">
            <Car width={24} height={24} />
            <span className="text-sm">Manual</span>
          </div>
          <div className="flex items-center gap-1.5 text-secondary-300">
            <Profile2User width={24} height={24} />
            <span className="text-sm">80L</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-4">
        <span className="text-xl font-bold w-full">
          $80.00/ <span className="text-sm text-secondary-300">day</span>
        </span>
        <Button variant={"default"} size={"lg"} className="h-[44px] w-full">
          Rent Now
        </Button>
      </CardFooter>
    </Card>
  );
};
