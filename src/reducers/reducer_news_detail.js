/**
 * Created by Bogdan on 8/2/2016.
 */
import {NEWS_SELECTED,GET_SPECIFIC_NEWS_REQUEST,GET_SPECIFIC_NEWS_SUCCES} from '../constants/newsDetail'

const initialState = {
   newsDetail: {},
   fetchingDetails:false,
}

export default function newsDetail(state = initialState,action) {
    switch (action.type){
        case NEWS_SELECTED:
            return action.payload;
        case GET_SPECIFIC_NEWS_REQUEST:
           return {...state,fetchingDetails:true}
        case GET_SPECIFIC_NEWS_SUCCES:
           return {...state, newsDetail:action.payload ,fetchingDetails:false}
    }
    return state;
}

