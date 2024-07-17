'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

interface IReduxWrapperProps {
  children: React.ReactNode
}

const ReduxWrapper: React.FC<IReduxWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="flex-grow overflow-auto my-6">{children}</div>
    </Provider>
  )
}

export default ReduxWrapper
