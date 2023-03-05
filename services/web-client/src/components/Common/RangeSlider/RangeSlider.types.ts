import type React from 'react'

interface Classes {
  wrapper?: string
}

export interface Props {
  min: number
  max: number
  from: number
  to: number
  onChange: (v: number[]) => void
  marks: Record<number, React.ReactNode>
  label: React.ReactNode
  classes?: Classes
}
