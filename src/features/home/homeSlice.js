import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Data from '../../data/data.js'
const DATA_URL = ''

const initialState = {
  data: null,
  loading: false,
  status: null,
  error: null,
}


export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getWord: state => {
      state.data = Data[Math.floor(Math.random() * Data.length)]
    },
  },

})
export const { getWord } = homeSlice.actions

export default homeSlice.reducer
