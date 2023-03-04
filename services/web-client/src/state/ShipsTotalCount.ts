import { atom } from 'recoil'

export const ShipsTotalCount = atom<number>({
  default: 0,
  key: 'shipsTotalCount'
})
