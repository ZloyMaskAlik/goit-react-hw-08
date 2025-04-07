import React from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './components/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import "modern-normalize"
import './index.css'
import App from './components/App'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate persistor={persistor}>  
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
