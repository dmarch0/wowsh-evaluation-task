export interface Props {
  variant?: TextVariants
  children: React.ReactNode
  className?: string
  mainHeader?: boolean
  subHeader?: boolean
  label?: boolean
}

export enum TextVariants {
  span = 'span',
  div = 'div',
  h1 = 'h1',
  label = 'label'
}
