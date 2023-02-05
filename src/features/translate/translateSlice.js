import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GOOGLE_TRANSLATE_API_KEY } from '@env'

const initialState = {
  text: '',
  data: null,
  loading: false,
  error: null,
}
let encodedParams

export const fetchWord = createAsyncThunk('fetchWord', async text => {
  let encodedParams = new URLSearchParams()
  encodedParams.append('q', text)
  encodedParams.append('target', 'tr')
  encodedParams.append('source', 'en')

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': GOOGLE_TRANSLATE_API_KEY,
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    data: encodedParams,
  }

  const response = await axios(options)
  return response.data
})

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
      console.log(state.text)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchWord.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchWord.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      console.log(action.payload)
    })
    builder.addCase(fetchWord.rejected, (state, action) => {
      state.loading = false
      state.error = 'Error fetching.'
    })
  },
})

export const { setText } = translateSlice.actions
export default translateSlice.reducer
