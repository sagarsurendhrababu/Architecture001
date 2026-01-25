import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//MUI provider
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//importing app theme
import appTheme from './theme/appTheme.js';
//importing BrowserRouter
import { BrowserRouter } from 'react-router-dom';
//Redux Provide
import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
