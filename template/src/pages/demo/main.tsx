import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const root = document.getElementById('demo');

if (root) {
  console.log(root)
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}