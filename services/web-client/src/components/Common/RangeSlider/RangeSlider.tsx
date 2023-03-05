import React from 'react'
import Slider from 'rc-slider'

import type { Props } from './RangeSlider.types'

import './RcSliderStyles.scss'

const RangeSlider: React.FC<Props> = (props) => {
  const { min, max, from, to, onChange, marks, label, classes } = props

  const onChangeSlider = (v: number | number[]) => {
    if (typeof v === 'number') {
      onChange([v])
      return
    }

    onChange(v)
  }

  return (
    <div className={classes?.wrapper}>
      {label}
      <Slider
        range
        allowCross={false}
        value={[min, max]}
        min={from}
        max={to}
        onChange={onChangeSlider}
        step={null}
        marks={marks}
      />
    </div>
  )
}

export default RangeSlider
