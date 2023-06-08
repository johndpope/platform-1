import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { Background } from "../Background";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Background",
  component: (args) => <Background {...args} className="h-80 w-80" />,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Title of the background",
      type: "string"
    }
  }
} satisfies Meta<typeof Background>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Text-to-Image"
  }
};

export const NoTitle: Story = {
  args: {}
};
