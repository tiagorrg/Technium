import React from "react";
import { useParams } from "react-router-dom";

export const CurrentBlog = () => {
    const url = useParams()

    return (
        <div>
            <span>Blog № - {url.blogId}</span>
        </div>
    )
}