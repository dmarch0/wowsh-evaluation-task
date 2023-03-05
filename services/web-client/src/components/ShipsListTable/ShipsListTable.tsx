import React, { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'

import { ShipsListTableHeader } from 'components/ShipsListTableHeader'
import { ShipsListTableRow } from 'components/ShipsListTableRow'
import { Loader } from 'components/Common/Loader'

import { ShipsListState } from 'state/ShipsList/ShipsList.state'
import { ShipsListRequestState } from 'state/ShipsListRequest/ShipsListRequest.state'
import { ShipsOffset } from 'state/ShipsOffset'

import styles from './ShipsListTable.module.scss'

const ShipsListTable: React.FC = () => {
  const ships = useRecoilValue(ShipsListState)
  const offset = useRecoilValue(ShipsOffset)
  const { processing } = useRecoilValue(ShipsListRequestState)

  const tableRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (tableRef.current == null) return
    tableRef.current?.scrollTo(0, 0)
  }, [offset])

  return (
    <div className={styles.ShipsListTableWrapper} ref={tableRef}>
      <ShipsListTableHeader/>
      {!processing && ships.map(ship => (
        <ShipsListTableRow ship={ship} key={ship.id}/>
      ))}
      {processing && (
        <Loader classes={{ wrapper: styles.Loader }}/>
      )}
    </div>
  )
}

export default ShipsListTable
