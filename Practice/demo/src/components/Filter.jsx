import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
    const [searchParams,setSearchparams] = useSearchParams()
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))
    const age = searchParams.get('age')
    const city = searchParams.get('city')
  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>
      <button onClick={()=>setSearchparams({age:40})} > Set age in query param</button>
    </div>
  )
}

export default Filter
