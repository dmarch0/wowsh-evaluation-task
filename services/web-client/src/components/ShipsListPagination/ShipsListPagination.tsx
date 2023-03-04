import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { Button } from 'components/Common/Button'

import { ShipsTotalCount } from 'state/ShipsTotalCount'
import { ShipsOffset } from 'state/ShipsOffset'
import { ShipsLimit } from 'state/ShipsLimit'

import styles from './ShipsListPagination.module.scss'

const ShipsListPagination: React.FC = () => {
  const totalCount = useRecoilValue(ShipsTotalCount)
  const [offset, setOffset] = useRecoilState(ShipsOffset)
  const limit = useRecoilValue(ShipsLimit)

  const onGoPrevious = (): void => {
    setOffset(offset - limit)
  }

  const onGoNext = (): void => {
    setOffset(offset + limit)
  }

  const isAbleToGoPrevious = offset > 0
  const isAbleToGoNext = offset + limit < totalCount

  return (
    <div className={styles.ShipsListPaginationWrapper}>
      <div className={styles.PaginationControls}>
        <Button onClick={onGoPrevious} primary className={styles.PrevButton} disabled={!isAbleToGoPrevious}>
          Previous
        </Button>
        <Button onClick={onGoNext} primary disabled={!isAbleToGoNext}>
          Next
        </Button>
      </div>
      <div className={styles.PaginationCounter}>
        Total ships: {totalCount}, Page {Math.floor(offset / limit) + 1} out of {Math.floor(totalCount / limit) + 1}
      </div>
    </div>
  )
}

export default ShipsListPagination
