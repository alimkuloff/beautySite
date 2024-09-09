import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { Product } from '../../types';

interface ProductsState {
  products: Product[];
  categories: string[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await axios.get<Product[]>('http://makeup-api.herokuapp.com/api/v1/products.json');
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.categories = Array.from(new Set(action.payload.map(product => product.product_type)));
        state.status = 'idle';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setCategories } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectCategories = (state: RootState) => state.products.categories;
export default productsSlice.reducer;
