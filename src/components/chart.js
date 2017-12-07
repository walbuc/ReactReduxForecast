import React from 'react'
import _ from 'lodash'

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default function (props) {
    return (
      <div>
        <Sparklines height={180} width={200} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
      </div>
    )
}

function average(data) {
  return _.round(_.sum(data)/data.length)
}
