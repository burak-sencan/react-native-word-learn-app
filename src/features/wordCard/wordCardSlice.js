import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  savedWord: null,
  keys: [],
  idx: 0,
}

export const wordCardSlice = createSlice({
  name: 'wordCard',
  initialState,

  reducers: {
    setIdx: (state, action) => {
      if (action.payload === 0) {
        state.idx = 0
      } else {
        state.idx += 1
      }
    },
    setKeys: (state, action) => {
      state.keys = action.payload
    },
    getSavedWord: (state, action) => {
      try {
        action.payload != null ? (state.savedWord = JSON.parse(action.payload)) : null
      } catch (error) {
        console.log(error)
      }
    },
  },
})

export const { getSavedWord, setIdx, setKeys } = wordCardSlice.actions

export default wordCardSlice.reducer
