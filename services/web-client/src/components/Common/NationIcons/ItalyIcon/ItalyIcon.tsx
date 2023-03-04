import React from 'react'

import italyIconUrl from './italy.png'

import type { Props } from './ItalyIcon.types'

const ItalyIcon: React.FC<Props> = (props) => (
  <img src={italyIconUrl} alt='italy-icon' className={props.className} />
)

export default ItalyIcon
