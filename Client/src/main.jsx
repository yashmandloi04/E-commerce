import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import UserAuthSlice from './Redux/UserAuthSlice'
import MyCartSlice from './Redux/MyCartSlice'
let rootReducer = combineReducers({ UserAuthSlice, MyCartSlice })
const store = configureStore({ reducer: rootReducer })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
