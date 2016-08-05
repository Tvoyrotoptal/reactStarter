/**
 * Created by Bogdan on 8/4/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {ModalWindow} from './singleNews';
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router';
import * as newsActions from '../actions/newsListActions'


// export const Modal = React.createClass({
//   styles: {
//     position: 'fixed',
//     top: '20%',
//     right: '20%',
//     bottom: '20%',
//     left: '20%',
//     padding: 20,
//     boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
//     overflow: 'auto',
//     background: '#fff'
//   },
//   render() {
//     return (
//       <div style={this.styles}>
//          <p><Link to={"/"}>Back</Link></p>
//           {this.props.children}
//       </div>
//     )
//   }
// })
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
    const {initDone} = this.props.newsActions;
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
      console.log(isModal)
    return (
      <div>
        <h1>Pinterest Style Routes</h1>

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
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        newsList: state.newsList,
        newsDetail: state.newsDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

