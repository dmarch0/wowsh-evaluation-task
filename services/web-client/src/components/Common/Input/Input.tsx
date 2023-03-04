import React from 'react'

import type { Props } from './Input.types'

import styles from './Input.module.scss'
import cn from 'classnames'

const Input: React.FC<Props> = (props) => {
  const { label, name, onChange, placeholder, classes } = props

  return (
    <div className={cn(styles.InputWrapper, classes?.wrapper)}>
      {Boolean(label) && <label htmlFor={name} className={styles.Label}>{label}</label>}
      <input
        name={name}
        onChange={(e) => { onChange(e.target.value) }}
        placeholder={placeholder}
        className={styles.Input}
      />
    </div>
  )
}

export default Input
