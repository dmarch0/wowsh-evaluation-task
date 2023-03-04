import { atom } from 'recoil'

export const ShipsLimit = atom<number>({
  default: 30,
  key: 'shipsLimit'
})
