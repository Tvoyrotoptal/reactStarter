/**
 * Created by Bogdan on 8/2/2016.
 */
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
    gutter:10,
    itemSelector: '.grid-item'
    });
    console.log('im rendered',grid,pckry);
}
    const grids = document.querySelector('.grid');

class NewsList extends Component {
    componentDidUpdate(){
            console.log(grids);
        initPackery();
        // pckry.prepended( items );
    }
    componentWillMount() {
        const {getNews} = this.props.newsActions;
        const {updateNews} = this.props.newsActions;
        getNews()
        updateNews();

    }

    prependPeckery (itemDetail){
        var fragment = document.createDocumentFragment();
        var item = document.createElement('div');
        item.className = 'grid-item';
        var newDivContent = document.createElement('div');
        newDivContent.innerHTML = itemDetail.native_title;
        item.appendChild(newDivContent)
        fragment.appendChild(item);
        grid.insertBefore(fragment, grid.firstChild );
        pckry.prepended(item)
    }

    render() {
        const {news, fetching , updated} = this.props.newsList;
        console.log(updated);

        return (
            <div className ="grid">
                {fetching ?
                <p>Загрузка...</p>
                :
                news.map((data, index) =>
                <div key={index} className='grid-item'>
                    <p><img src={data.src}/></p>
                    <p>{data.native_title} ❤</p>
                </div>
                )}
                {Object.keys(updated).length === 0 && updated.constructor === Object ? null :
                    setTimeout(this.prependPeckery(this.props.newsList.updated),300)
                }
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