/**
 * Created by Снежана on 06.08.2016.
 */
import React from 'react';
import { Component } from 'react';

import NewsList from '../containers/container_news_list';
import ContactForm from '../containers/container_filter_news';

export default class App extends Component {
    componentDidMount() {
        console.log("HYI HYI", this.props)
    }
    render() {
    return (
      <div className="wrap">
        <ContactForm />
        <NewsList />
      </div>
    );
  }
}