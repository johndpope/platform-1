import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { ImageContainer } from "../ImageContainer";
import { Background } from "../Background";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/ImageContainer",
  component: (args) => (
    <Background className="h-full w-full p-10">
      <ImageContainer {...args} />
    </Background>
  ),
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The text to display above the image"
    },
    src: {
      description: "The image link to display",
      type: "string"
    }
  }
} satisfies Meta<typeof ImageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    title: "Empty ImageContainer",
    src: ""
  }
};

export const WithImage: Story = {
  args: {
    title: "ImageContainer with image",
    src: "https://picsum.photos/200/300"
  }
};
