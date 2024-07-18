'use client'
import React from 'react'

interface ISimplyLoaderProps {
  children?: React.ReactNode
}

const SimplyLoader: React.FC<ISimplyLoaderProps> = ({ children }) => {
  return (
    <div className="loading text-center animate-loading font-bold text-[32px] italic">
      {children}
    </div>
  )
}

export default SimplyLoader
