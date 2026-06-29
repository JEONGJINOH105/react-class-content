import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Signup from './signup'
// import UseStateRouter from './UseStateRouter'
// import UseStateRouter2 from './UseStateRouter2'
import Kiosk from './Kiosk'
// import RadioButtonText from './test/RadioButtonText'
// import SelectBoxTest from './test/SelectBoxTest'
// import DateTest from './test/DateTest'
// import Habbies from './test/Habbies'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kiosk />
  </StrictMode>,
)
