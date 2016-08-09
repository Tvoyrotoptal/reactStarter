/**
 * Created by Bogdan on 8/2/2016.
 */
import{GET_NEWS_REQUEST,GET_NEWS_SUCCES,UPDATE_NEWS,INIT_DONE,GET_FILTERED_NEWS_SUCCES,ROOT_URL } from '../constants/newsList'

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
      case GET_NEWS_REQUEST:
           return {...state,fetching:news.length===0}
      case GET_NEWS_SUCCES:
           return {...state, news:(firstInit)?action.payload : action.payload.reverse(),fetching:false,updated:{},firstInit:true}
      case GET_FILTERED_NEWS_SUCCES:
           return {...state, news:(firstInit)?action.payload : action.payload.reverse(),fetching:false,updated:{},firstInit:true}
      case INIT_DONE:
           return {...state,firstInit:true}
      case UPDATE_NEWS:
           return {...state,news:Object.keys(updated).length === 0 && updated.constructor === Object ? news.slice(0,news.length-1) : [].concat(updated).concat(news.slice(0,news.length-1)),updated:action.payload}
      default:
           return state;
   }

}