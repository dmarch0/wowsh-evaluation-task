import React, { useMemo, useState } from 'react'
import { useFloating } from '@floating-ui/react-dom'
import cn from 'classnames'

import { Button } from 'components/Common/Button'
import { ArrowDownIcon } from 'components/Common/Icons'

import type { Props } from './Select.types'

import styles from './Select.module.scss'

const Select: React.FC<Props> = (props) => {
  const { label, value, options, placeholder, classes, onChange } = props

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const onToggleClick = (): void => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const onOptionSelect = (value: string): void => {
    onChange(value)
    setIsDropdownOpen(false)
  }

  const { refs, x, y, strategy } = useFloating()

  const selectedOption = useMemo(() => options.find(o => o.value === value), [value, options])

  return (
    <div
      className={cn(styles.SelectWrapper, classes?.wrapper)}
      ref={refs.reference as React.MutableRefObject<HTMLDivElement>}
    >
      {label}
      <Button
        simple
        onClick={onToggleClick}
        className={cn(styles.SelectPreview, { [styles.IsOpen]: isDropdownOpen })}
      >
        <div className={styles.SelectPreviewContent}>
          {selectedOption?.preview ?? placeholder}
        </div>
        <div className={cn(styles.DropDownButton, { [styles.IsOpen]: isDropdownOpen })}>
          <ArrowDownIcon />
        </div>
      </Button>
      {isDropdownOpen && (
        <div
          ref={refs.floating as React.MutableRefObject<HTMLDivElement>}
          style={{
            top: `${x}px`,
            left: `${y}px`,
            position: strategy
          }}
          className={styles.DropDown}
        >
          {options.map(o => (
            <Button
              simple
              className={styles.Option}
              onClick={() => { onOptionSelect(o.value) }}
              key={o.value}
            >
              {o.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
