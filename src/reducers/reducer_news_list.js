/**
 * Created by Bogdan on 8/2/2016.
 */
import{GET_NEWS_REQUEST,GET_NEWS_SUCCES,UPDATE_NEWS,INIT_DONE,GET_FILTERED_NEWS_SUCCES,ROOT_URL,GET_UPDATED} from '../constants/newsList'

const initialState = {
   news: [
   ],
   updated:{},
   fetching:false,
   firstInit:false
}

export default function newsList(state = initialState, action) {
    const {news,updated,firstInit} = state;

   switch (action.type){
       case GET_UPDATED:
           return {
               ...state
               // ,
               // news: Object.keys(updated).length !== 0 ? [].concat(updated).concat(news.slice(0, news.length - 1)) : news.slice(0, news.length - 1)
               // ,updated:{}}
           }
      case GET_NEWS_REQUEST:
           return {...state,fetching:news.length===0}
      case GET_NEWS_SUCCES:
            return {
                ...state,
                news: action.payload,
                fetching: false,
                updated: {},
                lastNews: action.payload.slice(-1)
            }
      case GET_FILTERED_NEWS_SUCCES:
           return {...state, news:(firstInit)?action.payload : action.payload.reverse(),fetching:false,updated:{},firstInit:true}
      case INIT_DONE:
           return {...state,firstInit:true}
      case UPDATE_NEWS:
            return {
                ...state,
                // updated: action.payload,
                // news:[].concat(action.payload).concat(news)
                news: [].concat(action.payload).concat(news.slice(0, news.length - 1)),
                lastNews: news.slice(-1)
            }
       default:
           return state;
   }

}
/**
 * Created by Bogdan on 8/2/2016.
 */
