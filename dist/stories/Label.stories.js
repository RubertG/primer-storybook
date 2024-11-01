import { Label } from "../components/Label";
const meta = {
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
};
export default meta;
export const Basic = {
    args: {
        label: 'Label',
        size: 'normal',
        allCaps: false
    }
};
export const AllCaps = {
    args: {
        label: 'All Caps label',
        size: 'h1',
        allCaps: true
    }
};
export const Secondary = {
    args: {
        label: 'Secondary label',
        size: 'h2',
        color: "text-primary",
        allCaps: false
    }
};
export const CustomColor = {
    args: {
        label: 'Custom Color label',
        size: 'h3',
        fontColor: '#00ff00',
        allCaps: false
    }
};
export const CustomBackgroundColor = {
    args: {
        label: 'Custom Color label',
        size: 'h3',
        allCaps: false,
        backgroundColor: '#a6c8ff'
    }
};
