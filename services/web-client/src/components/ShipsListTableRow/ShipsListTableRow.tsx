import React, { useState } from 'react'
import { arabToRoman } from 'roman-numbers'
import { useRecoilValue } from 'recoil'
import cn from 'classnames'

import { Language } from 'state/Language'

import { Button } from 'components/Common/Button'
import { ShipInfoModal } from 'components/ShipInfoModal'

import { NationLabels } from 'const/Nations'
import { IMAGES_API_ROOT } from 'const/API'

import gridStyles from 'components/ShipsListTable/Grid.module.scss'
import styles from './ShipsListTableRow.module.scss'
import type { Props } from './ShipsListTableRow.types'

const ShipsListTableRow: React.FC<Props> = (props) => {
  const { ship } = props

  const language = useRecoilValue(Language)
  const [isShipInfoModalOpen, setShipInfoModalOpen] = useState(false)

  return (
    <div className={cn(gridStyles.ShipListTableGrid, styles.ShipsListTableRow)}>
      <img
        src={`${IMAGES_API_ROOT}/${ship.icons.contour}`}
        alt='ship-contour'
        className={cn(styles.ContourCell, styles.Cell)}
      />
      <div className={styles.Cell}>{ship.localization.mark[language]}</div>
      <div className={styles.Cell}>{ship.type}</div>
      <div className={styles.Cell}>{NationLabels[ship.nation]}</div>
      <div className={styles.Cell}>{ship.level > 10 ? '★' : arabToRoman(ship.level)}</div>
      <div className={styles.Cell}>
        <Button onClick={() => { setShipInfoModalOpen(true) }} primary>
          Read more
        </Button>
      </div>
      {isShipInfoModalOpen && (
        <ShipInfoModal onClose={() => { setShipInfoModalOpen(false) }} ship={ship} />
      )}
    </div>
  )
}

export default ShipsListTableRow
