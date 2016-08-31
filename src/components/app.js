import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as newsActions from '../actions/newsListActions'
import GalleryPackery from './packeryGallery'


class PackeryApp extends Component {
    componentWillMount() {
        const {getNews, updateNews} = this.props.newsActions;
        getNews();
    }

    getUpdate(){
        const { updateNews} = this.props.newsActions;
        let randomId=((Math.random()*10)+1|0);
        updateNews(randomId)
    }

    render() {
        const {news, fetching} = this.props.newsList;
        return (
            <div>
                {fetching ?<p>Загрузка...</p>:
                    <GalleryPackery elements={news} />
                }
                <button className="button" onClick={this.getUpdate.bind(this)}> Get new news</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newsList: state.newsList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PackeryApp)