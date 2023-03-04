import React from 'react'

import destroyerIconUrl from './destroyer.png'

import type { Props } from './DestroyerIcon.types'

const DestroyerIcon: React.FC<Props> = (props) => (
  <img src={destroyerIconUrl} alt='destroyer' className={props.className}/>
)

export default DestroyerIcon
