import { Meta, StoryObj } from "@storybook/react";

import { TextInputProps, TextInput } from "./TextInput";

export default {
  title: "Compenents/TextInput",
  component: TextInput,
  args: {
    placeholder: "Type your e-mail address",
  },
  argTypes: {},
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};
