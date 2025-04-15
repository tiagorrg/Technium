import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPost = createAsyncThunk(
    'posts/fetch',
    async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await response.json()
        return post
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: {},
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value = action.payload
            })
    }
})

export default postsSlice.reducer