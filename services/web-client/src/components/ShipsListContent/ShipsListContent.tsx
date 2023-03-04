import React from 'react'

import styles from './ShipsListContent.module.scss'
import { ShipsListTable } from 'components/ShipsListTable'
import { ShipsListPagination } from 'components/ShipsListPagination'

const ShipsListContent: React.FC = () => {
  return (
    <div className={styles.ShipsListContentWrapper}>
      <ShipsListTable />
      <ShipsListPagination />
    </div>
  )
}

export default ShipsListContent
