import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.
export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
