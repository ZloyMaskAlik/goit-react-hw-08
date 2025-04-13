import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import "modern-normalize"
import './index.css'
import App from './components/App'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);