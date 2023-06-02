import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { PickButton } from "../PickButton";
import { Engine } from "../Icons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/PickButton",
  component: PickButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      description: "The function to call when the button is clicked",
      type: "function"
    },
    className: {
      description: "The extra class names to apply to the button",
      type: "string"
    },
    disabled: {
      description: "Whether the button is disabled or not",
      type: "boolean"
    },
    label: {
      description: "The label to display inside the button",
      type: "string"
    },
    value: {
      description: "The value to display inside the button",
      type: "string"
    }
  }
} satisfies Meta<typeof PickButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Model",
    value: "Stable Diffusion XL",
    onClick: () => console.log("Clicked!"),
    icon: <Engine />
  }
};

export const Disabled: Story = {
  args: {
    label: "Model",
    value: "Stable Diffusion XL",
    disabled: true,
    onClick: () => console.log("Clicked!"),
    icon: <Engine />
  }
};
