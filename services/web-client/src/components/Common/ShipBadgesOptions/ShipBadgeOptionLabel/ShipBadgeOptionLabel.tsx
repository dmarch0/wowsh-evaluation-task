import React from 'react'

import type { Props } from './ShipBadgeOptionLabel.types'

import styles from './ShipBadgeOptionLabel.module.scss'

const ShipBadgeOptionLabel: React.FC<Props> = ({ Icon, label }) => (
  <div className={styles.ShipBadge}>
    <Icon className={styles.ShipIcon} />
    <span>{label}</span>
  </div>
)

export default ShipBadgeOptionLabel
