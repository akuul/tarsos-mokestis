import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorState {
  euroStandard: string | null;
  pollution: number;
  carType: string;
}

const initialState: CalculatorState = {
  euroStandard: '',
  pollution: 0,
  carType: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addEuro: (state, action: PayloadAction<string | null>) => {
      state.euroStandard = action.payload;
    },
    addPollution: (state, action: PayloadAction<number>) => {
      state.pollution = action.payload;
    },
    addCarType: (state, action: PayloadAction<string>) => {
      state.carType = action.payload;
    },
  },
});

export const { addEuro, addPollution, addCarType } = calculatorSlice.actions;
export default calculatorSlice.reducer;
