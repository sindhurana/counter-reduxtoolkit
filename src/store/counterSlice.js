import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increaseValue: (state, action) => {
            return state + 1;
        },
        decreaseValue: (state, action) => {
            return state - 1;
        },
        handleAdd: (state, action) => {
            return state + Number(action.payload);
        },
        handleSubtract: (state, action) => {
            return state - Number(action.payload);
        },


    }
})

export const counterActions = counterSlice.actions;
export default counterSlice;