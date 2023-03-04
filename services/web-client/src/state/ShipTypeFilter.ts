import { atom } from 'recoil'
import { type ShipTypes } from '../const/ShipTypes'

export const ShipTypeFilter = atom<ShipTypes[]>({
  default: [],
  key: 'shipTypeFilter'
})
