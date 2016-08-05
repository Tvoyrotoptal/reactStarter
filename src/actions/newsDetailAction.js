/**
 * Created by Bogdan on 8/4/2016.
 */
import { NEWS_SELECTED } from '../constants/newsDetail'

export function selectNews(news) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: NEWS_SELECTED,
    payload: news
  };
}