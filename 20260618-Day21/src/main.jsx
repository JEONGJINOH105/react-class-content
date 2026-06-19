import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts from './Posts'
import App from './App'
import App2 from './App2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Posts />
  </StrictMode>,
)
