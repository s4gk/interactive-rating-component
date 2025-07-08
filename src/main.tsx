import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/App';

// Import Styles
import '@/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
