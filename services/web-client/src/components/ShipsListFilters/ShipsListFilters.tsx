import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { BadgesList } from 'components/Common/BadgesList'
import { Text } from 'components/Common/Text'
import { Input } from 'components/Common/Input'

import { NationBadgesOptions } from 'components/Common/NationBadgesOptions'
import { NationFilter } from 'state/NationFilter'
import { NameFilter } from 'state/NameFilter'

import { ShipBadgesOptions } from 'components/Common/ShipBadgesOptions'
import { ShipTypeFilter } from 'state/ShipTypeFilter'

import styles from './ShipsListFilters.module.scss'
import { ShipsOffset } from '../../state/ShipsOffset'
import { type ShipTypes } from '../../const/ShipTypes'
import { type Nations } from '../../const/Nations'

const ShipsListFilters: React.FC = () => {
  const [shipTypeFilter, setShipTypeFilter] = useRecoilState(ShipTypeFilter)
  const [nationTypeFilter, setNationTypeFilter] = useRecoilState(NationFilter)
  const [nameFilter, setNameFilter] = useRecoilState(NameFilter)
  const setOffset = useSetRecoilState(ShipsOffset)

  const onChangeNameFilter = (name: string): void => {
    setNameFilter(name)
    setOffset(0)
  }

  const onChangeShipTypeFilter = (shipTypes: string[]): void => {
    setShipTypeFilter(shipTypes as ShipTypes[])
    setOffset(0)
  }

  const onChangeNationTypeFilter = (nationTypes: string[]): void => {
    setNationTypeFilter(nationTypes as Nations[])
    setOffset(0)
  }

  return (
    <div className={styles.ShipsListFiltersWrapper}>
      <Input
        label={<Text label>Filter by name</Text>}
        name='name'
        placeholder='Enter name'
        value={nameFilter}
        onChange={onChangeNameFilter}
        classes={{ wrapper: styles.Filter }}
      />
      <BadgesList
        options={ShipBadgesOptions}
        value={shipTypeFilter}
        onChange={onChangeShipTypeFilter}
        label={<Text label>Filter by type</Text>}
        classes={{ wrapper: styles.Filter }}
      />
      <BadgesList
        options={NationBadgesOptions}
        value={nationTypeFilter}
        onChange={onChangeNationTypeFilter}
        label={<Text label>Filter by nation</Text>}
        classes={{ wrapper: styles.Filter }}
      />
    </div>
  )
}

export default ShipsListFilters