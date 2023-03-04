import React from 'react'

import type { Props } from './USSRIcon.types'

import ussrIconUrl from './ussr.png'

const USSRIcon: React.FC<Props> = (props) => (
  <img src={ussrIconUrl} alt='ussr-icon' className={props.className} />
)

export default USSRIcon
