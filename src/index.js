import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import vi from 'react-intl/locale-data/vi';
import ja from 'react-intl/locale-data/ja';
import store from './store';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...vi, ...ja]);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
