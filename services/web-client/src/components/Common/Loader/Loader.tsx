import React from 'react'
import cn from 'classnames'

import type { Props } from './Loader.types'
import styles from './Loader.module.scss'

const Loader: React.FC<Props> = (props) => (
  <div className={cn(styles.Wrapper, props.classes?.wrapper)}>
    <span className={styles.Loader}></span>
  </div>
)

export default Loader
