'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

interface IReduxWrapperProps {
  children: React.ReactNode
}

const ReduxWrapper: React.FC<IReduxWrapperProps> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxWrapper
