import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Root } from './components/Root'
import { Users } from './pages/users'
import { Counter } from './pages/counter'
import { Posts } from './pages/posts'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Counter />,
        },
        {
          path: 'users',
          element: <Users />,
        },
        {
          path: 'posts',
          element: <Posts />,
        }
      ]
    }
  ]) 

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
