import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface YourFeatureState {
  value: number;
}

const initialState: YourFeatureState = {
  value: 0,
};

const yourFeatureSlice = createSlice({
  name: 'yourFeature',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use PayloadAction to type the action payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} =
  yourFeatureSlice.actions;
export default yourFeatureSlice.reducer;
