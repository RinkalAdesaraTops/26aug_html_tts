import React, { useEffect, useState } from 'react'

const LifecycleFunction = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(10)
        },2000)
    })
  return (
    <div>
        <h3>Lifecycle Function Example</h3>
        <h4>Count is - {count}</h4>
    </div>
  )
}

export default LifecycleFunction
