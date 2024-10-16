import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  value: [],
}


// to get products from API
export const getProduct = createAsyncThunk("getProduct", async () =>{
  const {data} = await axios.get("https://fakestoreapi.com/products")
  return data
})


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (payload) => {
    payload.addCase(getProduct.fulfilled,(state,action) => {
      state.value = action.payload
    })
  }
})

export default productSlice.reducer