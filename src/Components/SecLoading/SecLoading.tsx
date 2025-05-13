import React from 'react'
import { BounceLoader } from 'react-spinners'

export default function SecLoading() {
  return (
    <div className='w-screen h-screen flex items-center justify-center' >
      <BounceLoader color='#fff' size={20} />
    </div>
  )
}