import { atom } from 'recoil'
import {Nations} from "const/Nations";

export const NationFilter = atom<Nations[]>({
  default: [],
  key: 'nationFilter'
})
