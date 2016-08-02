import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NewsList from './containers/container_news_list';
import configureStore from './store/configureStore'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <NewsList />
  </Provider>
  , document.querySelector('.container'));
