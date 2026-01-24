import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//MUI provider
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//importing app theme
import appTheme from './theme/appTheme.js';
//importing BrowserRouter
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
