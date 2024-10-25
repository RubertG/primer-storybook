import './label.css'

interface Props {
  /**
   * Text to display
   */
  label: string

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'

  /**
   * All caps
   */
  allCaps?: boolean

  /**
   * Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

  /**
   * Font color 
   */
  fontColor?: string

  /**
   * Background color
   */
  backgroundColor?: string
}

export const Label = ({
  label, size = 'normal', allCaps = false, color, fontColor, backgroundColor = 'transparent'
}: Props) => {
  return (
    <span
      className={`label ${size} ${color || ''}`}
      style={{
        color: fontColor,
        backgroundColor
      }}
    >
      {
        allCaps
          ? label.toUpperCase()
          : label
      }
    </span>
  )
}
