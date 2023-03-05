import { atom, useSetRecoilState } from 'recoil'
import axios from 'axios'
import debounce from 'debounce'

import { API_SHIPS_ROOT } from 'const/API'
import { ShipsTotalCount } from 'state/ShipsTotalCount'
import { useShipListRequestStateActions } from 'state/ShipsListRequest/ShipsListRequest.state'

import { type Ship, type UpdateShipsList, type UpdateShipsListProps, type UseShipsListActions } from './ShipsList.types'

export const ShipsListState = atom<Ship[]>({
  default: [],
  key: 'shipsList'
})

export const useShipListActions: UseShipsListActions = () => {
  const setShipsListState = useSetRecoilState(ShipsListState)
  const setShipsTotalCount = useSetRecoilState(ShipsTotalCount)
  const { setStartedProcessing, setStoppedProcessing } = useShipListRequestStateActions()

  const updateShipsList: UpdateShipsList = async (props: UpdateShipsListProps) => {
    try {
      setStartedProcessing()
      const response = await axios({
        method: 'get',
        params: props,
        url: API_SHIPS_ROOT
      })
      setStoppedProcessing()
      if (response.status === 200) {
        setShipsListState(response.data.success.list)
        setShipsTotalCount(response.data.success.totalCount)
      }
    } catch (e) {
      setStoppedProcessing()
      console.error('Error getting ships list', e)
    }
  }

  const debouncedShipsList = debounce(updateShipsList, 1000)

  return {
    updateShipsList,
    debouncedShipsList
  }
}
