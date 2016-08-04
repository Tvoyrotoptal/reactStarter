/**
 * Created by Bogdan on 8/2/2016.
 */
import{GET_NEWS_REQUEST,GET_NEWS_SUCCES,UPDATE_NEWS,ROOT_URL } from '../constants/newsList'

const initialState = {
   news: [
   ],
   updated:{},
   fetching:false
}

export default function newsList(state = initialState, action) {
    const {news,updated} = state;

   switch (action.type){
      case GET_NEWS_REQUEST:
           return {...state,fetching:true}
      case GET_NEWS_SUCCES:
           return {...state,news:action.payload.reverse(),fetching:false}
      case UPDATE_NEWS:
           return {...state,news:Object.keys(updated).length === 0 && updated.constructor === Object ? news.slice(0,news.length-1) : [].concat(updated).concat(news.slice(0,news.length-1)),updated:action.payload}
      default:
           return state;
   }

}