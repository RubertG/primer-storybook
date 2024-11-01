import { jsx as _jsx } from "react/jsx-runtime";
import './label.css';
export const Label = ({ label, size = 'normal', allCaps = false, color, fontColor, backgroundColor = 'transparent' }) => {
    return (_jsx("span", { className: `label ${size} ${color || ''}`, style: {
            color: fontColor,
            backgroundColor
        }, children: allCaps
            ? label.toUpperCase()
            : label }));
};
