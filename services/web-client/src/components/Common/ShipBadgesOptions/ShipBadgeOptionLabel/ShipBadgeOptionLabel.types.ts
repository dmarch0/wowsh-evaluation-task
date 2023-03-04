import type React from 'react'

export interface IconInterface {
  className?: string
}

export interface Props {
  Icon: React.FC<IconInterface>
  label: string
}
