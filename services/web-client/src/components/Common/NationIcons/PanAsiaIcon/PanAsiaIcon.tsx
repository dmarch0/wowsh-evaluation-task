import React from 'react'

import type { Props } from './PanAsiaIcon.types'

import panAsiaIconUrl from './pan-asia.png'

const PanAsiaIcon: React.FC<Props> = (props) => (
  <img src={panAsiaIconUrl} alt='pan-asia-icon' className={props.className} />
)

export default PanAsiaIcon
