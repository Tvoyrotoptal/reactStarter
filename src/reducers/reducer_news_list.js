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
   switch (action.type){
      case GET_NEWS_REQUEST:
           return {...state,fetching:true}
      case GET_NEWS_SUCCES:
           return {...state,news:action.payload,fetching:false}
      case UPDATE_NEWS:
           return {...state,news:state.news,updated:action.payload}
      default:
           return state;
   }

}