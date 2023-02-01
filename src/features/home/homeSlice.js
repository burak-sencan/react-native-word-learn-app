import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Data from '../../data/data.js'
const DATA_URL = ''

const initialState = {
  data: null,
  loading: false,
  status: null,
  error: null,
}

// export const fetchData = createAsyncThunk('workspace/fetchData', async () => {
//   try {
//     const response = await axios.get(DATA_URL)
//     return [response.data]
//   } catch (error) {
//     return error.message
//   }
// })

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getWord: state => {
      state.data = Data[Math.floor(Math.random() * Data.length)]
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchData.pending, (state, action) => {
  //     state.loading = true
  //     state.error = ''
  //     state.status = 'pending'
  //   })
  //   builder.addCase(fetchData.fulfilled, (state, action) => {
  //     state.data = action.payload
  //     state.loading = false
  //     state.status = 'fulfilled'
  //   })
  //   builder.addCase(fetchData.rejected, (state, action) => {
  //     state.loading = false
  //     state.error = 'Error on fetching.'
  //     state.status = 'rejected'
  //   })
  // },
})
export const { getWord } = homeSlice.actions

export default homeSlice.reducer
