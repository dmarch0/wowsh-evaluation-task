import { type Nations } from 'const/Nations'
import { type ShipTypes } from 'const/ShipTypes'

type StringMap = Record<string, string>

export interface Ship {
  id: string
  level: number
  icons: StringMap
  nation: Nations
  type: ShipTypes
  localization: {
    shortMark: StringMap
    description: StringMap
    mark: StringMap
  }
}

export interface UpdateShipsListProps {
  types: ShipTypes[]
  nations: Nations[]
  name: string
  offset: number
}

export type UpdateShipsList = (props: UpdateShipsListProps) => Promise<void>
export type DebouncedUpdateShipsList = UpdateShipsList & { clear(): void }

export interface ShipsListActions {
  updateShipsList: UpdateShipsList
  debouncedShipsList: DebouncedUpdateShipsList
}

export type UseShipsListActions = () => ShipsListActions
