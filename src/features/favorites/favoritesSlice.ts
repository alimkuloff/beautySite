import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Product } from '../../types';

interface FavoritesState {
  items: Product[];
}

const getInitialFavorites = (): Product[] => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const initialState: FavoritesState = {
  items: getInitialFavorites(),
};

const saveFavoritesToLocalStorage = (items: Product[]) => {
  localStorage.setItem('favorites', JSON.stringify(items));
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      const existingFavorite = state.items.some(
        (item) => item.id === action.payload.id
      );

      if (!existingFavorite) {
        state.items.push(action.payload);
        saveFavoritesToLocalStorage(state.items);
      }
    },
    removeFavorite: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
  },
});

export const selectFavorites = (state: RootState) => state.favorites.items;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
