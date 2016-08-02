import { combineReducers } from 'redux'
import newsList from './reducer_news_list'
import newsDetail from './reducer_news_detail'

export default combineReducers({
    newsList,
    newsDetail
})