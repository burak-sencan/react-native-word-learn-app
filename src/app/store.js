import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import wordCardReducer from '../features/wordCard/wordCardSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    wordCard: wordCardReducer,
  },
})
