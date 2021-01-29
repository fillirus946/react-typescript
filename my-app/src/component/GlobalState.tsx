import {createContext, useContext} from 'react'

export const initialValues={
  rValue: true
}

export const GlobalContext = createContext(initialValues)


