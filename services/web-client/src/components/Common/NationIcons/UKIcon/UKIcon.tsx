import React from 'react'

import type { Props } from './UKIcon.types'

import ukIconUrl from './uk.png'

const UKIcon: React.FC<Props> = (props) => (
  <img src={ukIconUrl} alt='uk-icon' className={props.className} />
)

export default UKIcon
