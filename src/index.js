import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import App from './App';

import 'moment/locale/pt-br';

moment.locale('pt-br');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
