import type React from 'react'

export interface Props {
  children: React.ReactNode
  className?: string

  simple?: boolean
  primary?: boolean

  onClick: () => void
  disabled?: boolean
}
