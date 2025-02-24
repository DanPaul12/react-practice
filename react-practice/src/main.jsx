import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewComponent from './fetch.jsx'
import FormComponent from './foorm.jsx'
import Counter from './counter.jsx'
import Toggle from './toggle.jsx'
import DynamicList from './list.jsx'
import ToggleList from './togglelist.jsx'
import App2 from './colorpicker.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent />
  </StrictMode>,
)
