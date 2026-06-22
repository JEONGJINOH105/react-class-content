import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NoticePage from './NoticePage.jsx'
import MoviePage from './MoviePage.jsx'
import ReviewPage from './ReviewPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewPage />
  </StrictMode>,
)
