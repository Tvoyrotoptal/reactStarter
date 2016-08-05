/**
 * Created by Bogdan on 8/2/2016.
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';
import NewsList from './container_news_list';
import App from '../components/app'

class NewsDetail extends Component {

  render() {

    if (this.props.news===null) {
        
      return <NewsList selectedID={this.props.params.id} />;
        
    }

    return (
      <div>
        <h3>Details for:</h3>
          WJHHADLKNKLSDNKLNSDJNHALKMMslk
         <div>Title: {this.props.news.id}</div>
         <div>Pages: {this.props.news.native_title}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    news: state.newsDetail,
    newsList: state.newsList
  };
}

export default connect(mapStateToProps)(NewsDetail);
