import type { Meta, StoryObj } from "@storybook/react";
import "../GlobalVariables";

import { Button } from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text to display inside the button",
    },
    onClick: {
      description: "The function to call when the button is clicked",
      type: "function",
    },
    active: {
      description: "Whether the button is active or not",
      type: "boolean",
    },
    className: {
      description: "The extra class names to apply to the button",
      type: "string",
    },
    disabled: {
      description: "Whether the button is disabled or not",
      type: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: "Button",
    onClick: () => console.log("Clicked!"),
  },
};
