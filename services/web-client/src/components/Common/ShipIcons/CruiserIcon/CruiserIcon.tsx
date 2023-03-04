import React from 'react'

import cruiserIconUrl from './cruiser.png'

import type { Props } from './CruiserIcon.types'

const CruiserIcon: React.FC<Props> = (props) => (
  <img src={cruiserIconUrl} alt='cruiser' className={props.className} />
)

export default CruiserIcon
