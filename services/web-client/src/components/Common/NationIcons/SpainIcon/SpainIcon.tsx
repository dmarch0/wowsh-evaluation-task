import React from 'react'

import type { Props } from './SpainIcon.types'

import spainIconUrl from './spain.jpg'

const SpainIcon: React.FC<Props> = (props) => (
  <img src={spainIconUrl} alt='spain-icon' className={props.className} />
)

export default SpainIcon
