import React, {useReducer, useRef, useContext} from 'react'
import {useClickOutdside} from './useClickOutside'
import {GlobalContext} from './GlobalState'

const initialstate = {rValue: true}

type Action={
  type: "one" | "two"
}

type State = {
  rValue: boolean
}

function reducer(state: State, action:  Action) {
  switch(action.type){
    case "one":
      return {rValue: true}
    case "two":
      return {rValue: false}
    default: 
      return state;
  } 
}

export const RoducerButtons=()=>{
const ref = useRef<HTMLDivElement>(null!)
const [state, dispatch] = useReducer(reducer, initialstate )

const {rValue} = useContext(GlobalContext)



useClickOutdside(ref , ()=>{
  console.log('click outsides')
})
  return (
    <div ref={ref}>
      {rValue && state.rValue && <h1>visible</h1>}
      <button onClick={() => dispatch({type: 'one'})}>Action one</button>
      <button onClick={() => dispatch({type: 'two'})}>Action two</button>
    </div>
  )
}
