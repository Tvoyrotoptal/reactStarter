/**
 * Created by Bogdan on 8/2/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import {withRouter} from 'react-router';

import {browserHistory} from 'react-router'


export const ModalWindow = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});

    },
    Exit() {
        browserHistory.push('/')
    },

    open() {
        this.setState({showModal: true});
    },
    componentDidMount(){
        this.open()
    },

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onExit={this.Exit}
                       onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.props.newsContent.id}
                        {this.props.newsContent.native_title}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
});


// ReactDOM.render(<Example />, document.querySelector('.container'));