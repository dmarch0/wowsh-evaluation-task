import React from 'react'

import japanIconUrl from './japan.png'

import type { Props } from './JapanIcon.types'

const JapanIcon: React.FC<Props> = (props) => (
  <img src={japanIconUrl} alt='japan-icon' className={props.className} />
)

export default JapanIcon
