import type { Meta, StoryObj } from "@storybook/react";

import "../GlobalVariables";

import { Modal } from "../Modal";
import { Input } from "../Input";
import { Button } from "../Button";

function ModalDemo(props: Modal) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Stability/Modal",
  component: ModalDemo,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Title of the modal",
      type: "string"
    },
    children: {
      description: "Content of the modal"
    },
    open: {
      description: "Whether the modal is open or not",
      type: "boolean"
    },
    onClose: {
      description: "Function to call when the modal is closed",
      type: "function"
    },
    className: {
      description: "Extra class names to apply to the modal",
      type: "string"
    }
  }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Modal",
    children: "This is a modal",
    onClose: () => console.log("Closed!")
  }
};

export const NoTitle: Story = {
  args: {
    children: "This is a modal with no title",
    onClose: () => console.log("Closed!")
  }
};

export const Inputs: Story = {
  args: {
    title: "Modal",
    children: (
      <div className="flex flex-col gap-4">
        <Input title="Input 1" />
        <Input title="Input 2" />
        <Input title="Input 3" />
      </div>
    ),
    className: "w-96",
    onClose: () => console.log("Closed!")
  }
};
