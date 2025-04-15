import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {
        addUsers: (state, action) => {
            state.value.push(...action.payload)
        }
    }
})

export const { addUsers } = usersSlice.actions

export default usersSlice.reducer