/**
 * Created by Снежана on 06.08.2016.
 */
import React from 'react';
import { Component } from 'react';

import NewsList from '../containers/container_news_list';
import SimpleForm from '../containers/container_filter_news';

export default class App extends Component {
  render() {
    return (
      <div className="wrap">
        <SimpleForm />
        <NewsList />
      </div>
    );
  }
}