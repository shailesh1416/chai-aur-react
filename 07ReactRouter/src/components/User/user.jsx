import React from 'react'
import { useParams } from 'react-router-dom'


function user() {

    const {id} = useParams()
  return (
    <div className='text-center'>
      User:{id}
    </div>
  )
}

export default user
