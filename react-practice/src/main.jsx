import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewComponent from './fetch.jsx'
import FormComponent from './foorm.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent />
  </StrictMode>,
)
