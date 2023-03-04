import React from 'react'
import { ShipTypes } from 'const/ShipTypes'

import { DestroyerIcon } from 'components/Common/ShipIcons/DestroyerIcon'
import { CruiserIcon } from 'components/Common/ShipIcons/CruiserIcon'
import { BattleshipIcon } from 'components/Common/ShipIcons/BattleshipIcon'
import { CarrierIcon } from 'components/Common/ShipIcons/CarrierIcon'

import { ShipBadgeOptionLabel } from './ShipBadgeOptionLabel'

export const ShipBadgesLabels: Record<string, React.ReactNode> = {
  [ShipTypes.Destroyer]: <ShipBadgeOptionLabel Icon={DestroyerIcon} label='Destroyer' />,
  [ShipTypes.Cruiser]: <ShipBadgeOptionLabel Icon={CruiserIcon} label='Cruiser' />,
  [ShipTypes.Battleship]: <ShipBadgeOptionLabel Icon={BattleshipIcon} label='Battleship' />,
  [ShipTypes.Carrier]: <ShipBadgeOptionLabel Icon={CarrierIcon} label='Carrier' />,
  [ShipTypes.Submarine]: <ShipBadgeOptionLabel Icon={DestroyerIcon} label='Submarine' />
}

const ShipBadgesOptions: Array<{ value: string, label: React.ReactNode }> = Object.keys(ShipBadgesLabels).map(key => ({
  value: key,
  label: ShipBadgesLabels[key]
}))

export default ShipBadgesOptions
