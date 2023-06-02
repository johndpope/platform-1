import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { Button } from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The text to display inside the button",
      type: "string",
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
    variant: {
      description: "The variant of the button",
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    link: {
      description: "The link to navigate to when the button is clicked",
      type: "string",
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Generate",
    onClick: () => console.log("Clicked!"),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Generate",
    onClick: () => console.log("Clicked!"),
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "Go Somewhere Else",
    onClick: () => console.log("Clicked!"),
    link: "https://www.google.com",
  },
};