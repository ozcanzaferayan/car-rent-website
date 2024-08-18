import type { Preview } from "@storybook/react";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import React from "react";
import "../src/app/globals.css";
import { cn } from "../src/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
