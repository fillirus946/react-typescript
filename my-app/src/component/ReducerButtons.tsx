import React, {useReducer, useRef, useContext} from 'react'
import {useClickOutdside} from './useClickOutside'
import {GlobalContext} from './GlobalState'



// type Action={
//   type: "one" | "two"
// }

// type State = {
//   rValue: boolean
// }

// function reducer(state: State, action:  Action) {
//   switch(action.type){
//     case "one":
//       return {rValue: true}
//     case "two":
//       return {rValue: false}
//     default: 
//       return state;
//   } 
// }

export const RoducerButtons=()=>{
const ref = useRef<HTMLDivElement>(null!)

const context = useContext(GlobalContext)
const {rValue, turnOff, turnOn} = context



useClickOutdside(ref , ()=>{
  console.log('click outsides')
})
  return (
    <div ref={ref}>
      {rValue && <h1>visible</h1>}
      <button onClick={turnOff}>Action one</button>
      <button onClick={turnOn}>Action two</button>
    </div>
  )
}
