import React from 'react'

import usaIconUrl from './usa.png'

import type { Props } from './USAIcon.types'

const USAIcon: React.FC<Props> = (props) => (
  <img src={usaIconUrl} alt='usa-icon' className={props.className} />
)

export default USAIcon
