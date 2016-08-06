/**
 * Created by Bogdan on 8/4/2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router'
import NewsList from './containers/container_news_list';
import Wrap from './components/app_compose'
import App from './containers/app'
import NewsDetail from './containers/container_news_detail'


export default (
        <Route path="/" component={App}>
            <IndexRoute component={Wrap}/>
            <Route path="news/:id" component={NewsDetail} modal={true}/>
        </Route>
)
