import { type Ship } from 'state/ShipsList/ShipsList.types'

export interface Props {
  onClose: () => void
  ship: Ship
}
