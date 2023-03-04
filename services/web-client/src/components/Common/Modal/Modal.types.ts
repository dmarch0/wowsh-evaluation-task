import type React from 'react'

interface Classes {
  wrapper?: string
}

export interface Props {
  children: React.ReactNode
  onClose: () => void
  classes?: Classes
}
