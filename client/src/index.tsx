import React from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './App'
import reportWebVitals from './reportWebVitals'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <Toaster />
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
