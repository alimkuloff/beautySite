
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  items: CartProduct[]; 
}

const initialCart: CartProduct[] = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : [];

const initialState: CartState = {
  items: initialCart,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
