import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async (url = 'https://jsonplaceholder.typicode.com/users') => {
        const response = await fetch(url)
        const users = await response.json();
        await console.log(users)
        return users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username
        }));
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: [],
        state: 'idle'
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.value = action.payload
            })
    }
})

export default usersSlice.reducer