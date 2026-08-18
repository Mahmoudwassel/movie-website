import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
      <StrictMode>
        <BrowserRouter basename="/movie-website">
            <App />
        </BrowserRouter>
    </StrictMode>
  </Provider>
)
