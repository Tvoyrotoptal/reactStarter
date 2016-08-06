/**
 * Created by Bogdan on 8/2/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewsList from './container_news_list';

class NewsDetail extends Component {

    render() {
        return (
         <NewsList selectedID={this.props.params.id}/>
        )
    }
}


function mapStateToProps(state) {
    return {
        news: state.newsDetail,
        newsList: state.newsList
    };
}

export default connect(mapStateToProps)(NewsDetail);
