import { Meta, StoryObj } from "@storybook/react";

import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Compenents/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="Enter your name" />,
  },
  argTypes: {},
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
