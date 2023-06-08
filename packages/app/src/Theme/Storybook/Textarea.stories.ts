import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { Textarea } from "../Textarea";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The value of the textarea",
      type: "string",
    },
    onChange: {
      description: "The function to call when the textarea is changed",
      type: "function",
    },
    disabled: {
      description: "Whether the textarea is disabled or not",
      type: "boolean",
    },
    autoFocus: {
      description: "Whether the textarea is autofocused or not",
      type: "boolean",
    },
    placeholder: {
      description: "The placeholder text to display inside the textarea",
      type: "string",
    },
    title: {
      description: "The title of the textarea",
      type: "string",
    },
    color: {
      description: "The color of the circle of the textarea",
      options: ["positive", "negative", "neutral"],
      control: { type: "select" },
    }
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Textarea",
  },
};

export const Disabled: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Textarea",
    disabled: true,
  },
};

export const Positive: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "What do you want to see?",
    title: "Positive Prompt",
    color: "positive",
  },
};

export const Negative: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "What do you want to remove?",
    title: "Negative Prompt",
    color: "negative",
  },
};
