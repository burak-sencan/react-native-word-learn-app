import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import wordCardReducer from '../features/wordCard/wordCardSlice'
import translateReducer from '../features/translate/translateSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    wordCard: wordCardReducer,
    translate: translateReducer,
  },
})
