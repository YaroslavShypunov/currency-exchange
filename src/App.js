import React from 'react';
import './App.css';
import Root from './Root';
import mainTheme from './MuiTheme';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={mainTheme}>
        <Root />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
