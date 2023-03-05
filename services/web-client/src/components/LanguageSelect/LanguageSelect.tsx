import React from 'react'
import { useRecoilState } from 'recoil'

import { Select } from 'components/Common/Select'

import { LanguageOptions } from 'const/Languages'

import { Language } from 'state/Language'

import styles from './LanguageSelect.module.scss'

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
