import React, { useEffect, useState } from 'react'

const Testing = ()=>{
    const[count , setCount]= useState(0);
    const incCount = ()=>{
        setCount((prevState)=>prevState+1)
    }
    useEffect(()=>{
            console.log("Component created")

        return ()=>{
            console.log("Removed the Component")
        }
    },[])

    useEffect(()=>{
        console.log("component updated")
    },[count])
    return(
        <div>
            <p>count:{count}</p>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}
export default Testing;

