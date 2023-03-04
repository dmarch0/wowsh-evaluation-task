import React from 'react'

import type { Props } from './PanAmerica.types'

import panAmericaIconUrl from './pan-america.png'

const PanAmericaIcon: React.FC<Props> = (props) => (
  <img src={panAmericaIconUrl} alt='pan-america-icon' className={props.className} />
)

export default PanAmericaIcon
