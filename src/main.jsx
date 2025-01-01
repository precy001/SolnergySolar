import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Projects from './routes/Projects.jsx'

const router = createBrowserRouter([
        {path : '/', element : <App />},
        {path : '/about', element : <About />},
        {path : '/contact', element : <Contact />},
        {path:'/projects', element:<Projects />},
        {path:'*', element:<Contact />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
