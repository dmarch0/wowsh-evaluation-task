import React from 'react'

import type { Props } from './NationBadgeOptionLabel.types'

import styles from './NationBadgesOptionLabel.module.scss'

const NationBadgeOptionLabel: React.FC<Props> = ({ Icon, label }) => (
  <div className={styles.NationBadge}>
    <Icon className={styles.NationIcon} />
    <span>{label}</span>
  </div>
)

export default NationBadgeOptionLabel
