import type React from 'react'

interface Classes {
  wrapper?: string
}

export interface Props {
  label?: React.ReactNode
  name: string
  onChange: (value: string) => void
  value: string
  placeholder?: string
  classes?: Classes
}
