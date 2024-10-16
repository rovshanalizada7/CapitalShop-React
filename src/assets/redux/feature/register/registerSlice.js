import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  value: [],
}


// to get data from API
export const getData = createAsyncThunk("getData", async () =>{
  const {data} = await axios.get("https://67007c964da5bd2375542275.mockapi.io/users")
  return data
})


// to post data to API
export const postData = createAsyncThunk("postData", async (newData) => {
    const { data } = await axios.post("https://67007c964da5bd2375542275.mockapi.io/users", newData)
    return data
  })



export const registerSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (payload) => {
    payload.addCase(getData.fulfilled,(state,action) => {
      state.value = action.payload
    }),
    payload.addCase(postData.fulfilled,(state,action) => {
        state.value.push(action.payload)
    })
  }
})

export default registerSlice.reducer