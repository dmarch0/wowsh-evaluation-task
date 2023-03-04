import React, { useEffect } from 'react'

import { Header } from 'components/Header'
import { ShipsListFilters } from 'components/ShipsListFilters'
import { ShipsListContent } from 'components/ShipsListContent'

import styles from './ShipListPage.module.scss'
import { useShipListActions } from 'state/ShipsList/ShipsList.state'
import { useRecoilValue } from 'recoil'
import { ShipTypeFilter } from 'state/ShipTypeFilter'
import { NationFilter } from 'state/NationFilter'
import { NameFilter } from 'state/NameFilter'
import { ShipsOffset } from 'state/ShipsOffset'

export const ShipListPage: React.FC = () => {
  const types = useRecoilValue(ShipTypeFilter)
  const nations = useRecoilValue(NationFilter)
  const name = useRecoilValue(NameFilter)
  const offset = useRecoilValue(ShipsOffset)
  const { debouncedShipsList } = useShipListActions()

  useEffect(() => {
    debouncedShipsList({ types, nations, name, offset })
    return () => debouncedShipsList.clear()
  }, [types, nations, name, offset])

  return (
    <div className={styles.ShipListPageWrapper}>
      <Header />
      <ShipsListFilters />
      <ShipsListContent />
    </div>
  )
}

export default ShipListPage
