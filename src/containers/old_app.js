/**
 * Created by Bogdan on 8/4/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {ModalWindow} from './../components/modal_for_news';
import {bindActionCreators} from 'redux'


class App extends Component {
    componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  }

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
    return (

        <div>
          {isModal ?
            this.previousChildren :
              this.props.children
          }

          {isModal && (
            <ModalWindow newsContent={this.props.newsDetail}>
            </ModalWindow>
              
          )}
        </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        newsDetail: state.newsDetail
    }
}

export default connect(mapStateToProps)(App)

