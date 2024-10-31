import React from 'react'
import { useState } from 'react'

export default function Deneme({count,setCount,name, setName}) {
  return (
    <>
    <h1>Deneme</h1>
    <div>{count}</div>
    <div>{name}</div>
    <button onClick={() => setCount(count + 1)}>ARTTIR</button>
    </>
    
  )
}
