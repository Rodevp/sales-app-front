import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'jotai'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

  </BrowserRouter>
)
