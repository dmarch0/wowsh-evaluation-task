import React from 'react'
import cn from 'classnames'

import { type Props, TextVariants } from './Text.types'
import styles from './Text.module.scss'

const Text: React.FC<Props> = (props) => {
  const {
    variant = TextVariants.span,
    children,
    className: _className,
    mainHeader,
    subHeader,
    label
  } = props

  const className = cn(_className, {
    [styles.MainHeader]: mainHeader,
    [styles.Label]: label,
    [styles.SubHeader]: subHeader
  })

  return React.createElement(variant, { className }, children)
}

export default Text
