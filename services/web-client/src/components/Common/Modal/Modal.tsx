import React from 'react'
import * as ReactModal from 'react-modal'

import type { Props } from './Modal.types'

import styles from './Modal.module.scss'
import cn from 'classnames'

const Modal: React.FC<Props> = (props) => {
  const { children, onClose, classes } = props

  return (
    <ReactModal
      isOpen
      onRequestClose={onClose}
      overlayClassName={styles.ModalOverlay}
      className={cn(styles.ModalBody, classes?.wrapper)}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
