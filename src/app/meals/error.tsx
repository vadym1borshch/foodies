'use client'
import React from 'react'

const Error = () => {
  return (
    <div className="font-bold uppercase flex items-center justify-center flex-col w-full">
      <h2 className="text-[48px] text-gradient">An Error occurred!</h2>
      <p className="text-[18 px]">Meals not found! Try again later</p>
    </div>
  )
}

export default Error
