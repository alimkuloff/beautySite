import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';
import likesReducer from './features/favorites/favoritesSlice';
import currencyReducer from './features/currency/currencySlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorites: likesReducer,
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
