import React from 'react'

import type { Props } from './NetherlandsIcon.types'

import netherlandsIconUrl from './netherlands.png'

const NetherlandsIcon: React.FC<Props> = (props) => (
  <img src={netherlandsIconUrl} alt='netherlands-icon' className={props.className}/>
)

export default NetherlandsIcon
