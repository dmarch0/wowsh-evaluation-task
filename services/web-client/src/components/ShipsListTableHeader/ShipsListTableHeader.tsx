import React from 'react'

import gridStyles from 'components/ShipsListTable/Grid.module.scss'
import styles from './ShipListTableHeader.module.scss'
import cn from 'classnames'

const ShipsListTableHeader: React.FC = (props) => (
  <div className={cn(gridStyles.ShipListTableGrid, styles.ShipsListTableHeader)} >
    <div className={styles.TitleColumn}>Title</div>
    <div className={styles.TypeColumn}>Type</div>
    <div className={styles.LevelColumn}>Level</div>
    <div className={styles.NationColumn}>Nation</div>
  </div>
)

export default ShipsListTableHeader
