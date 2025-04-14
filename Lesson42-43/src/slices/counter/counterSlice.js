import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../../api/counterApi";

export const incrementAsync = createAsyncThunk(
    'counter/fetchCountForIncrement',
    async (amount) => {
        const response = await fetchCount(amount)

        return response.data
    }
)

export const decrementAsync = createAsyncThunk(
    'counter/fetchCountForDecrement',
    async (amount) => {
        const response = await fetchCount(amount)

        return response.data
    }
)

export const counterSlice = createSlice ({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle'
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })

            .addCase(decrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(decrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value -= action.payload
            })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer