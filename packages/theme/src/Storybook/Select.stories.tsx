import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { Select } from "../Select";
import { GridBlocks } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The value of the Select",
      type: "string"
    },
    onChange: {
      description: "The function to call when the Select is changed",
      type: "function"
    },
    disabled: {
      description: "Whether the Select is disabled or not",
      type: "boolean"
    },
    placeholder: {
      description: "The placeholder text to display inside the Select",
      type: "string"
    },
    title: {
      description: "The title of the Select",
      type: "string"
    },
    options: {
      description: "The options of the Select"
    }
  }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    value: "test",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Select",
    options: [
      { value: "test", label: "test" },
      { value: "test2", label: "test2" },
      { value: "test3", label: "test3" }
    ],
    icon: <GridBlocks />
  }
};

export const Disabled: Story = {
  args: {
    value: "test",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Select",
    options: [
      { value: "test", label: "test" },
      { value: "test2", label: "test2" },
      { value: "test3", label: "test3" }
    ],
    icon: <GridBlocks />,
    disabled: true
  }
};

export const NoIcon: Story = {
  args: {
    value: "test",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Select",
    options: [
      { value: "test", label: "test" },
      { value: "test2", label: "test2" },
      { value: "test3", label: "test3" }
    ]
  }
};

export const SomeDisabled: Story = {
  args: {
    value: "test",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Select",
    options: [
      { value: "test", label: "test" },
      { value: "test2", label: "test2", disabled: true },
      { value: "test3", label: "test3" }
    ]
  }
};
