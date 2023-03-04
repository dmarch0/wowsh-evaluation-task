import React from 'react'

import { NationLabels, Nations } from 'const/Nations'
import { USAIcon } from 'components/Common/NationIcons/USAIcon'
import { CommonwealthIcon } from 'components/Common/NationIcons/CommonwealthIcon'
import { EuropeIcon } from 'components/Common/NationIcons/EuropeIcon'
import { FranceIcon } from 'components/Common/NationIcons/FranceIcon'
import { GermanyIcon } from 'components/Common/NationIcons/GermanyIcon'
import { ItalyIcon } from 'components/Common/NationIcons/ItalyIcon'
import { JapanIcon } from 'components/Common/NationIcons/JapanIcon'
import { NetherlandsIcon } from 'components/Common/NationIcons/NetherlandsIcon'
import { PanAmericaIcon } from 'components/Common/NationIcons/PanAmericaIcon'
import { PanAsiaIcon } from 'components/Common/NationIcons/PanAsiaIcon'
import { SpainIcon } from 'components/Common/NationIcons/SpainIcon'
import { USSRIcon } from 'components/Common/NationIcons/USSRIcon'
import { UKIcon } from 'components/Common/NationIcons/UKIcon'

import { NationBadgeOptionLabel } from './ShipBadgeOptionLabel'

export const NationBadgesLabels: Record<string, React.ReactNode> = {
  [Nations.USA]: <NationBadgeOptionLabel Icon={USAIcon} label={NationLabels[Nations.USA]} />,
  [Nations.Commonwealth]: <NationBadgeOptionLabel Icon={CommonwealthIcon} label={NationLabels[Nations.Commonwealth]} />,
  [Nations.Europe]: <NationBadgeOptionLabel Icon={EuropeIcon} label={NationLabels[Nations.Europe]} />,
  [Nations.France]: <NationBadgeOptionLabel Icon={FranceIcon} label={NationLabels[Nations.France]} />,
  [Nations.Germany]: <NationBadgeOptionLabel Icon={GermanyIcon} label={NationLabels[Nations.Germany]} />,
  [Nations.Italy]: <NationBadgeOptionLabel Icon={ItalyIcon} label={NationLabels[Nations.Italy]} />,
  [Nations.Japan]: <NationBadgeOptionLabel Icon={JapanIcon} label={NationLabels[Nations.Japan]} />,
  [Nations.Netherlands]: <NationBadgeOptionLabel Icon={NetherlandsIcon} label={NationLabels[Nations.Netherlands]} />,
  [Nations.PanAmerica]: <NationBadgeOptionLabel Icon={PanAmericaIcon} label={NationLabels[Nations.PanAmerica]} />,
  [Nations.PanAsia]: <NationBadgeOptionLabel Icon={PanAsiaIcon} label={NationLabels[Nations.PanAsia]} />,
  [Nations.Spain]: <NationBadgeOptionLabel Icon={SpainIcon} label={NationLabels[Nations.Spain]} />,
  [Nations.USSR]: <NationBadgeOptionLabel Icon={USSRIcon} label={NationLabels[Nations.USSR]} />,
  [Nations.UK]: <NationBadgeOptionLabel Icon={UKIcon} label={NationLabels[Nations.UK]} />
}

const NationBadgesOptions: Array<{ value: string, label: React.ReactNode }> = Object.keys(NationBadgesLabels).map(key => ({
  value: key,
  label: NationBadgesLabels[key]
}))

export default NationBadgesOptions
