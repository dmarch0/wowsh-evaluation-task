import type React from 'react'

interface Option {
  label: React.ReactNode
  preview: React.ReactNode
  value: string
}

interface Classes {
  wrapper?: string
  preview?: string
}

export interface Props {
  options: Option[]
  label?: React.ReactNode
  value?: string
  placeholder?: React.ReactNode
  classes?: Classes
  onChange: (value: string) => void
}
