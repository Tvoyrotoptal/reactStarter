/**
 * Created by Bogdan on 8/2/2016.
 */
import {NEWS_SELECTED} from '../constants/newsDetail'
export default function newsDetail(state = null,action) {
    switch (action.type){
        case NEWS_SELECTED:
            return action.payload;
    }
    return state;
}

