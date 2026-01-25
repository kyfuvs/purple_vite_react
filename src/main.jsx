import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { PurpleProvider } from './context/PurpleContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PurpleProvider>
        <App />
      </PurpleProvider>
    </ThemeProvider>
  </React.StrictMode>
)
