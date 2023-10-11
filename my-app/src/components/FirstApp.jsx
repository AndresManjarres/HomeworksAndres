import React from 'react'
// Para manejar estados
import {useState} from "react"

const FirstApp = ({value}) => {
  const [counter, setcounter] = useState(value)

  const handleAdd = () => {
      setcounter(counter + 1 )
  }

  const handleSubsstract = () => {
      setcounter(counter - 1 )
  }

  const handleReset = () => {
      setcounter(value )
  }

  return(
      <>
      <h1>Contador</h1>
      <span>{counter}</span>
      <button onClick={() => handleAdd()} className="botones">+1</button> 
      <button onClick={() => handleSubsstract()} className="botones">-1</button> 
      <button onClick={() => handleReset()} className="botones">Reset</button>
      </>
  )
}

export default FirstApp