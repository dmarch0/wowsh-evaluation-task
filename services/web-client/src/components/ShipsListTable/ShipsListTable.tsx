import React, { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'

import { ShipsListTableHeader } from 'components/ShipsListTableHeader'
import { ShipsListTableRow } from 'components/ShipsListTableRow'

import { ShipsListState } from 'state/ShipsList/ShipsList.state'

import styles from './ShipsListTable.module.scss'
import { ShipsOffset } from '../../state/ShipsOffset'

const ShipsListTable: React.FC = () => {
  const ships = useRecoilValue(ShipsListState)
  const offset = useRecoilValue(ShipsOffset)

  const tableRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (tableRef.current == null) return
    tableRef.current?.scrollTo(0, 0)
  }, [offset])

  return (
    <div className={styles.ShipsListTableWrapper} ref={tableRef}>
      <ShipsListTableHeader/>
      {ships.map(ship => (
        <ShipsListTableRow ship={ship} key={ship.id}/>
      ))}
    </div>
  )
}

export default ShipsListTable
