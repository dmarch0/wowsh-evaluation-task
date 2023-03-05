export interface ShipsListRequestStateValue {
  processing: boolean
}

export type UseShipListRequestStateActions = () => {
  setStartedProcessing: () => void
  setStoppedProcessing: () => void
}
