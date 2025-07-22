import type { Meta, StoryObj } from "@storybook/vue3";

import folderIconRaw from "../../icons/folderIcon.svg?raw";
import ArrowIcon from "../../icons/ArrowIcon.vue";
import PawsInput from "./PawsInput.vue";

const icons = {
  None: null,
  Folder: folderIconRaw,
  Arrow: ArrowIcon,
};

const meta = {
  title: "Paws UI Kit/Input",
  component: PawsInput,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    isIconClickable: { control: "boolean" },
    iconName: {
      name: "icon",
      control: { type: "select" },
      options: Object.keys(icons),
      description: "Select an icon to display.",
      table: {
        category: "Slots",
      },
    },
    icon: {
      control: false,
    },
    onIconClick: { action: "icon-clicked" },
  },
  render: (args) => ({
    components: { PawsInput, ArrowIcon },
    setup() {
      // @ts-ignore
      const selectedIcon = icons[args.iconName];
      const isComponent = typeof selectedIcon !== "string" && selectedIcon !== null;
      return { args, selectedIcon, isComponent };
    },
    template: `
      <PawsInput
        v-model="args.modelValue"
        v-bind="args"
        @icon-click="args.onIconClick"
      >
        <template #icon v-if="selectedIcon">
          <div v-if="!isComponent" v-html="selectedIcon"></div>
          <component v-else :is="selectedIcon" />
        </template>
      </PawsInput>
    `,
  }),
  args: {
    modelValue: "",
    disabled: false,
    iconName: "None",
  },
} satisfies Meta<typeof PawsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const AdornedWithIcon: Story = {
  args: {
    placeholder: "Path to folder...",
    iconName: "Folder",
    isIconClickable: true
  },
};
