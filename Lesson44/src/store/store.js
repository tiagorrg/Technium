import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../pages/users/slice'
import postsReducer from '../pages/posts/slice'

export default configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer
    }
})