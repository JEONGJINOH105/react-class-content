import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
// import ListPage from './pages/ListPage.jsx'
// import LoginPage from './pages/LoginPage.jsx'
// import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MyWorkPage from './pages/MyWorkPage.jsx'
import App2 from './App2.jsx'
import NaverBlogPage from './pages/NaverBlogPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AboutPage /> */}
    {/* <MyWorkPage /> */}
    {/* <App /> */}
    {/* <App2 /> */}
    <NaverBlogPage />
  </StrictMode>,
)
