import React from 'react';


type Props = {
  header: string,
  count: number,
  countNow?: number
  special?: boolean
}

export const Item =({header, count, countNow = 234, special }:Props)=>{
  console.log(special)
  return (
    <div>
      {header}
      <p>{count}</p>
      {countNow}<br/>
      {special? 'priver' : 'poka'}
      <div>sdssdvsppasdassdvsdpo</div>
    </div>
  )
}
