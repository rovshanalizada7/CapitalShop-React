import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: JSON.parse(localStorage.getItem('basket')) || [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      if(state.items.some(item => item.id == action.payload.id)){
        alert("added one more")
      }else{
        state.items.push(action.payload);
        localStorage.setItem('basket', JSON.stringify(state.items));
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('basket', JSON.stringify(state.items));
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
