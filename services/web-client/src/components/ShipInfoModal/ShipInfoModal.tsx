import React from 'react'
import { useRecoilValue } from 'recoil'

import { Modal } from 'components/Common/Modal'
import { Text } from 'components/Common/Text'
import { TextVariants } from 'components/Common/Text/Text.types'
import { ShipBadgesLabels } from 'components/Common/ShipBadgesOptions/ShipBadgesOptions'
import { NationBadgesLabels } from 'components/Common/NationBadgesOptions/NationBadgesOptions'

import { IMAGES_API_ROOT, WIKIPEDIA_ROOT, WOWSH_WIKI_ROOT } from '../../const/API'
import { Language } from 'state/Language'

import styles from './ShipInfoModal.module.scss'
import { type Props } from './ShipInfoModal.types'

const ShipInfoModal: React.FC<Props> = (props) => {
  const language = useRecoilValue(Language)
  const { onClose, ship } = props

  return (
    <Modal onClose={onClose} classes={{ wrapper: styles.ShipInfoModalContent }}>
      <img src={`${IMAGES_API_ROOT}/${ship.icons.medium}`} className={styles.ShipImage}/>
      <Text variant={TextVariants.h1} subHeader className={styles.ShipModalHeader}>
        {ship.localization.mark[language]}
      </Text>
      <div>
        <div className={styles.Badges}>
          <div className={styles.Badge}>{ShipBadgesLabels[ship.type]}</div>
          <div className={styles.Badge}>{NationBadgesLabels[ship.nation]}</div>
        </div>
        <Text variant={TextVariants.span}>
          {ship.localization.description[language]}
        </Text>
        <div className={styles.Links}>
          <a target='_blank' href={`${WOWSH_WIKI_ROOT}?search=${ship.localization.mark.en}`} rel="noreferrer">
            Search WoWSh Wiki
          </a>
          <a target='_blank' href={`${WIKIPEDIA_ROOT}?search=${ship.localization.mark.en}+${ship.type}`} rel="noreferrer">
            Search Wikipedia
          </a>
        </div>
      </div>
    </Modal>
  )
}

export default ShipInfoModal
