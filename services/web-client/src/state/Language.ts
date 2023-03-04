import { atom } from 'recoil'
import { LanguageOptionsValues } from '../const/Languages'

export const Language = atom({
  key: 'language',
  default: LanguageOptionsValues.includes(navigator.language) ? navigator.language : 'en'
})
