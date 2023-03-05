import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { Header } from 'components/Header'
import { ShipsListFilters } from 'components/ShipsListFilters'
import { ShipsListContent } from 'components/ShipsListContent'

import { ShipTypeFilter } from 'state/ShipTypeFilter'
import { NationFilter } from 'state/NationFilter'
import { NameFilter } from 'state/NameFilter'
import { ShipsOffset } from 'state/ShipsOffset'
import { ShipLevelFilter } from 'state/ShipLevelFilter/ShipLevelFilter.state'
import { useShipListActions } from 'state/ShipsList/ShipsList.state'

import styles from './ShipListPage.module.scss'

export const ShipListPage: React.FC = () => {
  const types = useRecoilValue(ShipTypeFilter)
  const nations = useRecoilValue(NationFilter)
  const name = useRecoilValue(NameFilter)
  const offset = useRecoilValue(ShipsOffset)
  const levelFilter = useRecoilValue(ShipLevelFilter)
  const { debouncedShipsList } = useShipListActions()

  useEffect(() => {
    debouncedShipsList({ types, nations, name, offset, minLevel: levelFilter.min, maxLevel: levelFilter.max })
    return () => { debouncedShipsList.clear() }
  }, [types, nations, name, offset, levelFilter])

  return (
    <div className={styles.ShipListPageWrapper}>
      <Header />
      <ShipsListFilters />
      <ShipsListContent />
    </div>
  )
}

export default ShipListPage
