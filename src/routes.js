/**
 * Created by Bogdan on 8/4/2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router'
import NewsList from './containers/container_news_list';
import App from './components/app'
import NewsDetail from './containers/container_news_detail'


export default (
        <Route path="/" component={App}>
            <IndexRoute component={NewsList}/>
            <Route path="news/:id" component={NewsDetail} modal={true}/>
        </Route>
)