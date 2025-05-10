import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Home } from './components/Home/Home.jsx'
// import Root from './components/Root/Root.jsx'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
//       },
      
//     ]
//   },
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)

