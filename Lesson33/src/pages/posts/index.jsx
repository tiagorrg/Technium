import React from "react"
import { Link } from "react-router-dom"

export const Posts = () => {
    const posts = [
        {
            id: 1,
            name: `Post 1`
        },
        {
            id: 2,
            name: `Post 2`
        },
        {
            id: 3,
            name: `Post 3`
        },
        {
            id: 4,
            name: `Post 4`
        }
    ]

    return (
        <>
        <div>Посты</div>

            {posts.map( (post) => 
                <div key={post.id}>
                    <div>
                        <Link to={`/posts/${post.id}`}>
                            {post.name}
                        </Link>
                    </div>
                </div>
                
            )}
        </>
    )
}