import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const direct=useNavigate()
    const handle=()=>{
        direct('/home')
    }
  return (
    <>
        <div className='pageerror'>
         <h1>Error 401 page not found</h1>
         <button onClick={handle}>GO TO Home</button>
        </div>
    </>
  )
}

export default Notfound