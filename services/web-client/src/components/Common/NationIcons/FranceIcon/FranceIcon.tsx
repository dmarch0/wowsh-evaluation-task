import React from 'react'

import type { Props } from './FranceIcon.types'
import franceIconUrl from './france.png'

const FranceIcon: React.FC<Props> = (props) => (
  <img src={franceIconUrl} alt='france-icon' className={props.className} />
)

export default FranceIcon
