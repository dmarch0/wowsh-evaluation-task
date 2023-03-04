import React from 'react'

import { Button } from 'components/Common/Button'

import type { Props } from './BadgesList.types'

import styles from './BadgesList.module.scss'
import cn from 'classnames'

const availableColors = [
  'red',
  'blue',
  'green',
  'orange',
  'purple'
]

const BadgesList: React.FC<Props> = (props) => {
  const { options, value, onChange, label, classes } = props

  const onClickBadge = (badgeValue: string): void => {
    if (value.includes(badgeValue)) {
      onChange(value.filter(v => v !== badgeValue))
      return
    }

    onChange([...value, badgeValue])
  }

  return (
    <div className={cn(styles.BadgesWrapper, classes?.wrapper)}>
      {label}
      <div className={styles.BadgesListWrapper}>
        {options.map((o, i) => (
          <Button
            onClick={() => { onClickBadge(o.value) }}
            key={o.value}
            simple
            className={cn(styles.Badge, {
              [styles[availableColors[i % availableColors.length]]]: value.includes(o.value)
            })}
          >
            {o.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default BadgesList
