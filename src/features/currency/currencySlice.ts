import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  currency: string;
}

const initialState: CurrencyState = {
  currency: 'USD',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
