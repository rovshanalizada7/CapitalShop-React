import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../feature/product/productSlice'
import basketSlice from '../feature/basket/basketSlice'
import wishListSlice from '../feature/wishList/wishListSlice'
import  registerSlice  from '../feature/register/registerSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
    wishList: wishListSlice,
    register: registerSlice,
  }
})