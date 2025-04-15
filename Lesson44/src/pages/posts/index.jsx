import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from "./slice"

export const Posts = () => {
    const dispatch = useDispatch()

    const { value, status } = useSelector(state => state.posts)
    const currentPost = value

    return (
        <div>
            <div>Посты</div>
            <form onSubmit={(e) => {
                e.preventDefault()
                const postId = e.target.elements.postNumberInput.value
                if (postId) {
                    dispatch(fetchPost(postId))
                }
            }}>
                <input type="number" name="postNumberInput" min={1}/>
                <button type="submit">Запрос поста</button>
            </form>
            <div>
                {
                    status === 'loading' 
                        ?  '...loading' 
                        : <div>{currentPost.id} {currentPost.body}</div>
                }
            </div>
        </div>
    )
}