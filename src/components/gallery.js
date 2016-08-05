var React = require('react');
var Packery = require('react-packery-component')(React);
import {Link} from 'react-router'
// import App from './app'

import RaisedButton from 'material-ui/RaisedButton';

var packeryOptions = {
    transitionDuration: 0,
    gutter: 10

};
var packery;
var Gallery = React.createClass({
    render: function () {
        const refToClass = this;
        var childElements = this.props.elements.map(function (element) {
            return (
                <div key={element.id}
                     className={"grid-item " + (element.id % 10 > 5 ? 'grid-item--width2' : element.id % 10 < 2 ? 'grid-item--height2' : '')}
                     onClick={() => refToClass.props.selectNews(element)}>
                    <Link to={{ pathname : `/news/${element.id}`,
                    state: { modal: true, returnTo: '/' }}}
                        // onClick =  {() => refToClass.props.selectNews(element)}
                          className={"grid-item " + (element.id % 10 > 5 ? 'grid-item--width2' : element.id % 10 < 2 ? 'grid-item--height2' : '')}>
                        <p>{element.native_title}</p>
                    </Link>
                </div>
            );

        });
        if (!(Object.keys(this.props.updated).length === 0 && this.props.updated.constructor === Object)) {
            var uElements = (element, thisRef) => {
                return (
                    <div key={element.id} onClick={() => thisRef.props.selectNews(element)}
                         className={"grid-item " + (element.id % 10 > 5 ? 'grid-item--width2' : element.id % 10 < 2 ? 'grid-item--height2' : '')}>
                        <Link to={{ pathname : `/news/${element.id}`,
                            state: { modal: true, returnTo: '/' }}}                         >
                            <p>{element.native_title}</p>
                        </Link>
                    </div>
                );

            };
        }
        return (
            <Packery
                ref={function(c) {if(c!==null){this.packery = c.packery;}}.bind(this)}
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {!(Object.keys(this.props.updated).length === 0 && this.props.updated.constructor === Object) ?
                    uElements(this.props.updated, refToClass) : null
                }
                {childElements}

            </Packery>



        );
    }
});

module.exports = Gallery;