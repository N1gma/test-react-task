import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/redux/store';
import Home from 'app/containers/Home';


render(
  <Provider store={ store }>
    <Home />
  </Provider>,
  document.getElementById('root')
);
