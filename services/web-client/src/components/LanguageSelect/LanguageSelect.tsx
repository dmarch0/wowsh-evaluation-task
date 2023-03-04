import React from 'react'

import { Select } from 'components/Common/Select'
import { LanguageOptions } from 'const/Languages'

import styles from './LanguageSelect.module.scss'
import { useRecoilState } from 'recoil'
import { Language } from 'state/Language'

const LanguageSelect: React.FC = () => {
  const [language, setLanguage] = useRecoilState(Language)

  return (
    <Select
      options={LanguageOptions}
      classes={{
        wrapper: styles.LanguageSelectWrapper
      }}
      value={language}
      onChange={setLanguage}
    />
  )
}

export default LanguageSelect
