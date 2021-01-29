import React from 'react'

type Props = {
  
  // onClick(): void returns nothing
    children: String
//  onClick(text: string): void
//  onClick: (text: string) => void
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
} 



export const Button: React.FC<Props>=({onClick, children}: Props)=>{
  return (
    <button onClick={onClick}>click me {children}</button>
  )
}

export default Button
