import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Posts} from './pages/posts'
import { Blog } from './pages/blog'
import {Root} from './components/Root'
import { Main } from './pages/main'

import { Post } from './pages/posts/components/Post'
import { CurrentBlog } from './pages/blog/components/currentBlog'

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main />
        },
        {
          path: 'posts',
          element: <Posts />
        },
        {
          path: 'posts/:postId',
          element: <Post />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog/:blogId',
          element: <CurrentBlog />
        }
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
