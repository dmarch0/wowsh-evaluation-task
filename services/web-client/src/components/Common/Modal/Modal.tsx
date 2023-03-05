import React from 'react'
import ReactModal from 'react-modal'
import cn from 'classnames'

import type { Props } from './Modal.types'

import styles from './Modal.module.scss'

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
