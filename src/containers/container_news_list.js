/**
 * Created by Bogdan on 8/2/2016.
 */
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as newsActions from '../actions/newsListActions'
var pckry;
var grid;
var newElement;
function initPackery() {
    grid = document.querySelector('.grid');
    pckry = new Packery( grid, {
    gutter:5,
    itemSelector: '.grid-item'
    });
    console.log('im rendered',grid,pckry);
}

class NewsList extends Component {
    componentDidUpdate(){
        initPackery();
        const {updated} = this.props.newsList;
        if(!(Object.keys(updated).length === 0 && updated.constructor === Object)) {
            this.prependPeckery(updated);

        }

    }
    componentWillMount() {
        const {getNews} = this.props.newsActions;
        const {updateNews} = this.props.newsActions;
        getNews()
        updateNews();
    }


    prependPeckery (itemDetail){
        console.log(newElement);
        var fragment = document.createDocumentFragment();
        var item = document.createElement('div');
        ReactDOM.render(newElement,item);
        item.className = 'grid-item';
        item['key'] = itemDetail.id;

        fragment.appendChild(item);
        grid.insertBefore(fragment, grid.firstChild );
        pckry.prepended( item );
    }
    clickHadler(){
        console.log('gyi')
    }
    render() {
        const thisRef =this;
        const {news, fetching , updated} = this.props.newsList;
        console.log(updated);
        var upElement = function (element,refToClass) {
            return (
                <div key={element.id} onClick={refToClass.clickHadler} className={'wrapHandle'}>
                    <p>{element.native_title}</p>
                </div>
            );

        }
        newElement = upElement(updated,thisRef)
        console.log('render it !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        return (
            <div className ="grid">
                {fetching ?
                <p>Загрузка...</p>
                :
                news.map((data) =>
                <div key={data.id} onClick ={this.clickHadler}
                     className={"grid-item " + (data.id % 10 > 5 ? 'grid-item--width2' : data.id % 10 < 2 ? 'grid-item--height2' : '')}>
                    <div className="wrapHandle">
                    <p><img src={data.src}/></p>
                    <p>{data.native_title} ❤</p>
                  </div>
                </div>
                )}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        newsList: state.newsList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch),
        // userActions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)

        //
        // // const {getNews} = this.props.newsActions;
        // var upElement = function (element) {
        //    return (
        //         <div key={element.id} className={'grid-item'+element.id}>
        //             <p>{element.native_title}</p>
        //         </div>
        //     );
        //
        // };
        // newElement = upElement(updated)
//