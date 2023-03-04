import React from 'react'

import carrierIconUrl from './carrier.png'

import type { Props } from './CarrierIcon.types'

const CarrierIcon: React.FC<Props> = (props) => (
  <img src={carrierIconUrl} alt='carrier' className={props.className}/>
)

export default CarrierIcon
