import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
