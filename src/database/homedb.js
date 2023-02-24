import React from 'react'
import { useLocation } from 'react-router-dom'

function HomeDB() {
    const location = useLocation()


  return (
    <div className='homepage'>
        <h1>Hello { location.state.id } welcome</h1>
        </div>
  )
}

export default HomeDB