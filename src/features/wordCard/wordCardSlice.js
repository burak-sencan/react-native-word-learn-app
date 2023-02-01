import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  savedWord: null,
}

export const wordCardSlice = createSlice({
  name: 'wordCard',
  initialState,
  reducers: {
    getSavedWord: state => {
      state.savedWord = 'saved word one'
    },
  },
})

export const { getSavedWord } = wordCardSlice.actions

export default wordCardSlice.reducer
