import { atom, useSetRecoilState } from 'recoil'

import { type ShipsListRequestStateValue, type UseShipListRequestStateActions } from './ShipsListRequest.types'

export const ShipsListRequestState = atom<ShipsListRequestStateValue>({
  key: 'shipsListRequestState',
  default: {
    processing: false
  }
})

export const useShipListRequestStateActions: UseShipListRequestStateActions = () => {
  const setShipsListRequestState = useSetRecoilState(ShipsListRequestState)

  return {
    setStartedProcessing: () => { setShipsListRequestState(state => ({ ...state, processing: true })) },
    setStoppedProcessing: () => { setShipsListRequestState(state => ({ ...state, processing: false })) }
  }
}
