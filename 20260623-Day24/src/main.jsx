import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App4 from './App4'
import App5 from './App5'
import PostPage from './pages/PostPage'
// import App from './App.jsx'
// import HotTopic from './pages/HotTopic.jsx'
// import App2 from './App2.jsx'
// import App3 from './App3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostPage />
  </StrictMode>,
)
