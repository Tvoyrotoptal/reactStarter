import { combineReducers } from 'redux'
import newsList from './reducer_news_list'
import newsDetail from './reducer_news_detail'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    newsList,
    newsDetail,
    form: formReducer
})