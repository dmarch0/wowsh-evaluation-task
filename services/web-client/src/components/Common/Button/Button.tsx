import React from 'react'
import cn from 'classnames'

import type { Props } from './Button.types'

import styles from './Button.module.scss'

const Button: React.FC<Props> = (props) => {
  const {
    children,
    className: _className,
    simple,
    primary,
    disabled,
    onClick
  } = props

  const className = cn(_className, {
    [styles.Simple]: simple,
    [styles.Primary]: primary,
    [styles.Disabled]: disabled
  })

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
