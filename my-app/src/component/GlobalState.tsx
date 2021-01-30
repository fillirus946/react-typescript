import React, {createContext, useReducer} from 'react'




export const initialValues={
  rValue: true,
  turnOn: () => {},
  turnOff:() => {}
}

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


export const GlobalContext = createContext(initialValues)

export const GlobalProvider: React.FC =({children})=>{
  const [state, eValuedispatch] = useReducer(reducer, initialValues )

  return (
    <GlobalContext.Provider value={{
      rValue: state.rValue,
      turnOn: () => eValuedispatch({type: 'one'}),
      turnOff: () => eValuedispatch({type: 'two'}) 
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
