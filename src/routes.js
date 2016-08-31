/**
 * Created by Bogdan on 8/4/2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router'
import NewsList from './containers/container_news_list';
import Wrap from './components/app_compose'
// import App from './containers/app'
import NewsDetail from './containers/container_news_detail'
import App from './components/app';



export default (
        <Route path="/" component={Wrap}>
            <IndexRoute component={App}/>
            <Route path="news/:id" component={NewsDetail} modal={true}/>
        </Route>
)
