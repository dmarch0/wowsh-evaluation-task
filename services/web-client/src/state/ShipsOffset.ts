import { atom } from 'recoil'

export const ShipsOffset = atom<number>({
  default: 0,
  key: 'shipsOffset'
})
