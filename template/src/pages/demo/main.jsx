import React from 'react'
import { createRoot } from 'react-dom/client'
import { initI18n } from '../../site'
import 'tailwindcss/tailwind.css';
import App from './app'

const root = document.getElementById('demo');
initI18n()

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}