/**
 * Created by Bogdan on 8/4/2016.
 */
import { NEWS_SELECTED,GET_SPECIFIC_NEWS_REQUEST,GET_SPECIFIC_NEWS_SUCCES } from '../constants/newsDetail'
const SpecificNews ={
         "id": 1294,
         "source": 1,
         "category": 2,
         "text": "BABBABABABABABBBABABBABABBABabодібно. Якщо ви збираєтесь використовувати Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз. Більшість відомих генераторів Lorem Ipsum в Мережі генерують текст шляхом повторення наперед заданих послідовностей Lorem Ipsum. Принципова відмінність цього генератора робить його першим справжнім генератором Lorem Ipsum. Він використовує словник з більш як 200 слів латини та цілий набір моделей речень - це дозволяє генерувати Lorem Ipsum, який виглядає осмислено. Таким чином, згенерований Lorem Ipsum не міститиме повторів, жартів, нехарактерних для латини слів і т.ін.",
         "native_title": "1 SFLKJasflkafIpsum",
         "native_img": "",
         "native_text": "передает Цензор.НЕТ.По его словам, все они будут распределены между тремя действующими пунктами пропуска - где они и будут осуществлять свою деятельность в ближайшие дни. По словам Слободяна,  будут вмешиваться в работу контрольных служб.Читайте на : Министр обороны России Шойгу проверяет боевую подготовку оккупантов в Крымункция ",
         "native_url": "http://sport.lb.ua/football/2016/03/22/330913_fifa_nachala_rassledovat_vibor.html",
         "date": "03.22.2016 20:04"
      }
export function selectNews(news) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: NEWS_SELECTED,
    payload: news
  };
}
export function getSpecificNews(newsId) {
    //    const url = `${ROOT_URL}&q=${newsId},ua`;
    // const request = axios.get(url);
    //
    // return{
    //     type: FETCH_WEATHER,
    //     payload:request
    // };
    return (dispatch)=>{
    dispatch({
      type: GET_SPECIFIC_NEWS_REQUEST
    })

    setTimeout(() => {
      dispatch({
        type: GET_SPECIFIC_NEWS_SUCCES,
        payload: SpecificNews
      })
    }, 1000)
    }
}