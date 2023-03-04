import React from 'react'

import commonwealthIconUrl from './commonwealth.png'

import type { Props } from './CommonwealthIcon.types'

const CommonwealthIcon: React.FC<Props> = (props) => (
  <img src={commonwealthIconUrl} alt='commonwealth-icon' className={props.className}/>
)

export default CommonwealthIcon
