import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsActions from '../actions/newsListActions';
import {reduxForm, Field, filterProps} from 'redux-form';

const FIELDS = ['censor', 'korrespondent', 'pravda', 'nv', 'ain', 'kurs', 'lb', 'world', 'ukraine', 'economics', 'sport', 'other']
const checkFilters = (prop)=>{
            Object.keys(prop).map((elem)=>{
                switch (elem){
                    case 'censor':
                        prop[elem]===true?filters.source[1]=true:filters.source[1]=false
                        break;
                    case 'korrespondent':
                        prop[elem]===true?filters.source[2]=true:filters.source[2]=false
                        break;
                    case 'pravda':
                        prop[elem]===true?filters.source[3]=true:filters.source[3]=false
                        break;
                    case 'nv':
                        prop[elem]===true?filters.source[4]=true:filters.source[4]=false
                        break;
                    case 'ain':
                        prop[elem]===true?filters.source[5]=true:filters.source[5]=false
                        break;
                    case 'hromadske':
                        prop[elem]===true?filters.source[6]=true:filters.source[6]=false
                        break;
                    case 'kurs':
                        prop[elem]===true?filters.source[7]=true:filters.source[7]=false
                        break;
                    case 'lb':
                        prop[elem]===true?filters.source[8]=true:filters.source[8]=false
                        break;
                    ///----------------------CATEGORY SWITCH--------------------///
                    case 'world':
                        prop[elem]===true?filters.category[1]=true:filters.category[1]=false
                        break;
                    case 'ukraine':
                        prop[elem]===true?filters.category[2]=true:filters.category[2]=false
                        break;
                    case 'economics':
                        prop[elem]===true?filters.category[3]=true:filters.category[3]=false
                        break;
                    case 'technologies':
                        prop[elem]===true?filters.category[4]=true:filters.category[4]=false
                        break;
                    case 'sport':
                        prop[elem]===true?filters.category[5]=true:filters.category[5]=false
                        break;
                    case 'other':
                        prop[elem]===true?filters.category[6]=true:filters.category[6]=false
                        break;
                    default:
                        console.log('there is no such source or category')
                }
     })

}
const filters = {
            source: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false
            },
            category: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false
            }
        };
class NewsFilter extends Component {
    
    onSubmit(props) {
    const {getFilteredNews} = this.props.newsActions;
        // console.log("HEY!!!!!!!!!!", props)
    checkFilters(props);
        //post tyt
    console.log(filters);
    // getFilteredNews()

    }

    render() {
        // const {fields: {firstName, lastName}, handleSubmit} = this.props;
        const {handleSubmit} = this.props;
        return (
            <div id="menu-filters">
                <div className="wrap-src-menu-h">
                    <h3>Источники</h3>
                </div>

                <form id="fixed-menu" onSubmit={handleSubmit(props =>this.onSubmit(props))}>
                    <div className="wrap-src-menu-p">
                        <p>
                            <label><Field name="censor" className="rememberme" component="input" type="checkbox"/>
                                Цензор</label>
                        </p>
                        <p>
                            <label><Field name="korrespondent" className="rememberme" component="input"
                                          type="checkbox"/>Корреспондент</label>
                        </p>
                        <p>
                            <label><Field name="pravda" className="rememberme" component="input" type="checkbox"/>
                                Українська Правда</label>
                        </p>
                        <p>
                            <label><Field name="nv" className="rememberme" component="input" type="checkbox"/>
                                Новое Время</label>
                        </p>
                        <p>
                            <label><Field name="ain" className="rememberme" component="input" type="checkbox"/>
                                Ain.ua</label>
                        </p>
                        <p>
                            <label><Field name="hromadske" className="rememberme" component="input" type="checkbox"/>
                                Громадське</label>
                        </p>
                        <p>
                            <label><Field name="kurs" className="rememberme" component="input" type="checkbox"/>
                                Kurs.com.ua</label>
                        </p>
                        <p>
                            <label><Field name="lb" className="rememberme" component="input" type="checkbox"/>Лівий
                                Берег</label>
                        </p>
                        <div className="wrap-ctg-menu-h">
                            <h3>Категории</h3>
                        </div>
                        <p>
                            <label><Field name="world" className="rememberme" component="input"
                                          type="checkbox"/>Мир</label>
                        </p>
                        <p>
                            <label><Field name="ukraine" className="rememberme" component="input" type="checkbox"/>
                                Украина</label>
                        </p>
                        <p>
                            <label><Field name="economics" className="rememberme" component="input" type="checkbox"/>
                                Экономика</label>
                        </p>
                        <p>
                            <label><Field name="technologies" className="rememberme" component="input" type="checkbox"/>
                                Технологии</label>
                        </p>
                        <p>
                            <label><Field name="sport" className="rememberme" component="input" type="checkbox"/>
                                Спорт</label>
                        </p>
                        <p>
                            <label><Field name="other" className="rememberme" component="input" type="checkbox"/>
                                Разное</label>
                        </p>
                        <button className="linkFiltr waves-effect waves-light btn" type="submit">найти новости</button>
                    </div>
                </form>
            </div>

        );
    }
}

NewsFilter = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'newsFilter',                           // a unique name for this form
    fields: ['censor', 'korrespondent', 'pravda', 'nv', 'ain', 'kurs', 'lb', 'world', 'ukraine', 'economics', 'sport', 'other'] // all the fields in your form
})(NewsFilter);

export default NewsFilter;

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch)
    }
}
export default connect(mapDispatchToProps)(NewsFilter)