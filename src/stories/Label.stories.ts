import { Meta, StoryObj } from "@storybook/react";
import { Label, type Props } from "../components/Label";

const meta: Meta<Props> = {
  title: 'UI/labels/label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      }
    },
    fontColor: {
      control: {
        type: 'color',
      }
    },
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Label',
    size: 'normal',
    allCaps: false
  }
}

export const AllCaps: Story = {
  args: {
    label: 'All Caps label',
    size: 'h1',
    allCaps: true
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    size: 'h2',
    color: "text-primary",
    allCaps: false
  }
}

export const CustomColor: Story = {
  args: {
    label: 'Custom Color label',
    size: 'h3',
    fontColor: '#00ff00',
    allCaps: false
  }
}

export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom Color label',
    size: 'h3',
    allCaps: false,
    backgroundColor: '#a6c8ff'
  }
}