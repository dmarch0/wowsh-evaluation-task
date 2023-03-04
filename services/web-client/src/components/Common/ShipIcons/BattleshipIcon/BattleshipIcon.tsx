import React from 'react'

import battleshipIconUrl from './battleship.png'

import type { Props } from './BattleshipIcon.types'

const BattleshipIcon: React.FC<Props> = (props) => (
  <img src={battleshipIconUrl} alt='battleship' className={props.className} />
)

export default BattleshipIcon
