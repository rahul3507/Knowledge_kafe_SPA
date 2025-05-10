import React from 'react'
import profile from '../../assets/images/profile.jpg'
export const Header = () => {
  return (
    <div className='flex justify-between items-center  p-4 border-b-2 border-gray-300'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="Profile" className='w-12 h-12 rounded-full' />
    </div>
  )
}
