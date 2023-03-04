import React from 'react'

import { Text } from 'components/Common/Text'
import { TextVariants } from 'components/Common/Text/Text.types'
import { LanguageSelect } from 'components/LanguageSelect'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Text variant={TextVariants.h1} mainHeader>
        World of warships naval park
      </Text>
      <LanguageSelect/>
    </div>
  )
}

export default Header
