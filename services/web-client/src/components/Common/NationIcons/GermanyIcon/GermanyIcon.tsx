import React from 'react'

import type { Props } from './GermanyIcon.types'

import germanyIconUrl from './germany.png'

const GermanyIcon: React.FC<Props> = (props) => (
  <img src={germanyIconUrl} alt='germany-icon' className={props.className} />
)

export default GermanyIcon
