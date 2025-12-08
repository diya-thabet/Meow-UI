import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  document.body.innerHTML = `
    <div style="color: red; padding: 20px;">
      <h1>App Crash</h1>
      <pre>${error.message}</pre>
    </div>
  `
}
