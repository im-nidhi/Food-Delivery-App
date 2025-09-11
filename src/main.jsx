import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // optional (for dropdowns, modals, navbar toggle)
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App/>
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
)
