import type React from 'react'

interface Option {
  label: React.ReactNode
  value: string
}

interface Classes {
  wrapper?: string
}

export interface Props {
  options: Option[]
  value: string[]
  onChange: (value: string[]) => void
  label?: React.ReactNode
  classes?: Classes
}
