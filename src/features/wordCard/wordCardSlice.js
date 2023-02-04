import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  savedWord: null,
}

export const wordCardSlice = createSlice({
  name: 'wordCard',
  initialState,
  reducers: {
    getSavedWord: (state, action) => {
      try {
        action.payload != null ? (state.savedWord = JSON.parse(action.payload)) : null
      } catch (error) {
        console.log(error)
      }
    },
  },
})

export const { getSavedWord } = wordCardSlice.actions

export default wordCardSlice.reducer
