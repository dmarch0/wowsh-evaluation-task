import { atom } from 'recoil'
import { type Nations } from 'const/Nations'

export const NationFilter = atom<Nations[]>({
  default: [],
  key: 'nationFilter'
})
