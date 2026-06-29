import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index2.css'
import GameCharList from './GameCharList'
// import UseObjectList from './UseObjectList'
// import UseObjectTest from './UseObjectTest'
// import FriendList from './ex/FriendList'
// import MovieList from './MovieList'
// import CartList from './CartList'
// import SearchArray from './SearchArray'
// import TextCount from './TextCount'
// import './index.css'
// import Lab1 from './lab/lab1'
// import UseStateInput from './UseStateInput'
// import DarkMode from './ex/DarkMode'
// import LikeMode from './LikeMode'
// import PasswordMode from './ex/PasswordMode'
// import ClassNameTest from './ex/ClassNameTest'
// import BgChange from './ex/BgChange'
// import App from './App.jsx'
// import UseStateTest from './UseStateTest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameCharList />
  </StrictMode>,
)
