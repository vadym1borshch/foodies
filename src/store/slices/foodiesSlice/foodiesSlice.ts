import { createSlice } from '@reduxjs/toolkit'

export interface IInitialState {

}

const initialState: IInitialState = {

}

export const foodiesSlice = createSlice({
  name: 'foodies',
  initialState,
  reducers: {

  },
})

export const { } = foodiesSlice.actions


export default foodiesSlice.reducer
