/**
 * Created by Bogdan on 8/2/2016.
 */
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as newsActions from '../actions/newsListActions'
import * as newsDetails from '../actions/newsDetailAction'
import Gallery from '../components/gallery'
import {Link} from 'react-router'
import {ModalWindow} from '../components/singleNews';

import Modal from  '../components/app'


class NewsList extends Component {

    componentWillMount() {
        const {getNews} = this.props.newsActions;
        const {updateNews} = this.props.newsActions;
        getNews();
        updateNews();
    }

    componentDidUpdate() {
        if (this.props.newsActive !== undefined && this.props.newsActive.length != 0) {
            console.log("!!", this.props.newsActive)
        }
    }


    render() {
        const {news, fetching, updated } = this.props.newsList;

        return (
            <div className="grid">
                {fetching ?
                    <p>Загрузка...</p>
                    :
                    <Gallery elements={news} updated={updated} location={this.props.location}
                             selectNews={this.props.newsDetails.selectNews }/>
                    
                }
                {
                    (this.props.newsActive !== undefined && this.props.newsActive.length != 0) ?
                                    <ModalWindow newsContent={this.props.newsActive[0]} />:null

                }
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        newsList: state.newsList,
        newsActive: state.newsList.news.filter(function (elem) {
            return elem['id'] == ownProps['selectedID']
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch),
        newsDetails: bindActionCreators(newsDetails, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)

