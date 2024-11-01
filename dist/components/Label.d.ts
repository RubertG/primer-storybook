import './label.css';
export interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * All caps
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color
     */
    fontColor?: string;
    /**
     * Background color
     */
    backgroundColor?: string;
}
export declare const Label: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
