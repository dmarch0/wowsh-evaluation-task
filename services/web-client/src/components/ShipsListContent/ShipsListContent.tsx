import React from 'react'

import { ShipsListTable } from 'components/ShipsListTable'
import { ShipsListPagination } from 'components/ShipsListPagination'

import styles from './ShipsListContent.module.scss'

const ShipsListContent: React.FC = () => {
  return (
    <div className={styles.ShipsListContentWrapper}>
      <ShipsListTable />
      <ShipsListPagination />
    </div>
  )
}

export default ShipsListContent
