import React from 'react'
import {useState,useEffect} from 'react'
import { useMemo } from 'react'
const Counter = () => {

    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)

    const incrementOne= () =>{
        setOne(one+1)
    }
    const incrementTwo= () =>{
        setTwo(two+1)
    }

    const isEven = useMemo(()=>{
        let i=0;
        while(i < 1000000000) i++;
        return one%2 === 0;
    },[one])
    

  return (
    <div>

    <button onClick={incrementOne}>Increment One - {one} : {isEven ? 'Even' : 'Odd'}</button>
    <button onClick={incrementTwo}>Increment Two - {two}</button>
    </div>
  )
}

export default Counter