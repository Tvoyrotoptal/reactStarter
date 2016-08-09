/**
 * Created by Bogdan on 8/2/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from '../components/app_compose'

export default class NewsDetail extends Component {

    render() {
        return (
         <App passSelectedID={this.props.params.id}/>
        )
    }
}



