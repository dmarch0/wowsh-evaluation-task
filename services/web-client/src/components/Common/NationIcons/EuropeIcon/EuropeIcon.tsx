import React from 'react'

import europeIconUrl from './europe.png'

import type { Props } from './EuropeIcon.types'

const EuropeIcon: React.FC<Props> = (props) => (
  <img src={europeIconUrl} alt='europe-icon' className={props.className} />
)

export default EuropeIcon
