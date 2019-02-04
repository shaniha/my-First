import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import TinderApp from './TinderApp';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { pink, amber } from '@material-ui/core/colors';
// import './TinderCss.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: pink,
    secondary: amber
  },
})
ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <TinderApp />
    </MuiThemeProvider>
  </BrowserRouter>
  , document.getElementById("root"));