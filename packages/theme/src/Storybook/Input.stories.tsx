import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { Input } from "../Input";
import { GridBlocks } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The value of the input",
      type: "string"
    },
    onChange: {
      description: "The function to call when the input is changed",
      type: "function"
    },
    onNumberChange: {
      description: "The function to call when the number input is changed",
      type: "function"
    },
    disabled: {
      description: "Whether the input is disabled or not",
      type: "boolean"
    },
    autoFocus: {
      description: "Whether the input is autofocused or not",
      type: "boolean"
    },
    placeholder: {
      description: "The placeholder text to display inside the input",
      type: "string"
    },
    title: {
      description: "The title of the input",
      type: "string"
    },
    number: {
      description: "Whether the input is a number or not",
      type: "boolean"
    },
    percentage: {
      description: "Whether the input is a percentage or not",
      type: "boolean"
    }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Input",
    icon: <GridBlocks />
  }
};

export const Number: Story = {
  args: {
    value: "",
    onNumberChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Input",
    icon: <GridBlocks />,
    number: true
  }
};

export const Percentage: Story = {
  args: {
    value: "",
    onNumberChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Input",
    icon: <GridBlocks />,
    percentage: true,
    number: true
  }
};

export const Disabled: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Input",
    icon: <GridBlocks />,
    disabled: true
  }
};

export const Autofocus: Story = {
  args: {
    value: "",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Input",
    icon: <GridBlocks />,
    autoFocus: true
  }
};

export const WithValue: Story = {
  args: {
    value: "Value",
    onChange: () => console.log("Changed!"),
    placeholder: "Placeholder",
    title: "Input",
    icon: <GridBlocks />
  }
};
