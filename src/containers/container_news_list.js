// /**
//  * Created by Bogdan on 8/2/2016.
//  */
// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'
// import * as newsActions from '../actions/newsListActions'
// import * as newsDetails from '../actions/newsDetailAction'
// import Gallery from '../components/gallery'
// import {Link} from 'react-router'
// import {ModalWindow} from '../components/modal_for_news';
//
//
// class NewsList extends Component {
//
//     componentWillMount() {
//         const {getNews, updateNews} = this.props.newsActions;
//         const {newsDetail} =this.props.newsActive;
//         const {getSpecificNews} = this.props.newsDetailActions;
//         if (Object.keys(newsDetail).length === 0 && newsDetail.constructor === Object) {
//             getNews();
//             updateNews();
//         }
//         if (this.props.selectedID) {
//             getSpecificNews(this.props.selectedID);
//         }
//     }
//
//     render() {
//         const {news, fetching, updated} = this.props.newsList;
//         const {newsDetail, fetchingDetails} = this.props.newsActive;
//         return (
//             <div id="output">
//                 <div className="content">
//                     {fetching ?
//                         <p>Загрузка...</p>
//                         :
//                         <Gallery elements={news} updated={updated} location={this.props.location}
//                                  selectNews={this.props.newsDetailActions.selectNews }/>
//                     }
//                     {
//                         (this.props.selectedID) ?
//                             <ModalWindow fetching={fetchingDetails} newsContent={newsDetail}/> : null
//                     }
//                 </div>
//             </div>
//         )
//     }
//
// }
//
// function mapStateToProps(state) {
//     return {
//         newsList: state.newsList,
//         newsActive: state.newsDetail
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         newsActions: bindActionCreators(newsActions, dispatch),
//         newsDetailActions: bindActionCreators(newsDetails, dispatch)
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
//
