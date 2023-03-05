import { atom } from 'recoil'

import type { ShipLevelFilterState } from './ShipLevelFilter.types'

export const ShipLevelFilter = atom<ShipLevelFilterState>({
  key: 'shipLevelFilter',
  default: {
    min: 1,
    max: 11
  }
})
