import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
    const blogs = [
        {
            id: 1,
            name: `Blog 1`
        },
        {
            id: 2,
            name: `Blog 2`
        },
        {
            id: 3,
            name: `Blog 3`
        },
        {
            id: 4,
            name: `Blog 4`
        }
    ]

    return (
        <>
        <div>Посты</div>

            {blogs.map( (blog) => 
                <div key={blog.id}>
                    <div>
                        <Link to={`/blog/${blog.id}`}>
                            {blog.name}
                        </Link>
                    </div>
                </div>
                
            )}
        </>
    )       
}