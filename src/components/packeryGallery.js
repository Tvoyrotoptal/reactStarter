var React = require('react');
var Packery = require('react-packery-component')(React);
import Appear from './appear';

var packeryOptions = {
    transitionDuration: '450ms'
};

var Gallery = React.createClass({
    getInitialState:function(){
        return {showAnim:false};
    }
    ,
    componentWillReceiveProps(nextProps){
        this.setState({showAnim: true})
    },

    componentDidMount(){

    },
    handleLayoutComplete(){
        console.log('finished')
    }
    ,
    componentWillUpdate(){

    }
    ,


    render: function () {
        var refToComponent=this;
        var childElements = this.props.elements.map(function(element,index){
            if(index===0) {
//                console.log('grid-item ' + (element.id % 10 > 5 ? 'grid-item--width2 ' : element.id % 10 < 2 ? 'grid-item--height2 ' : '') + (index === 0 ? " no-vis" : ""))
            }
            return (
            <div key={index}>
                { index==0 ? <Appear delay={1} element={element.id}>
                             <p>{index}  {element.id} </p></Appear>:
                             <div className={'grid-item ' + (element.id % 10 > 5 ? 'grid-item--width2 ' : element.id % 10 < 2 ? 'grid-item--height2 ' : '')} >
                    <p>{index}  {element.id} </p>
                </div> }
                </div>

            );
        });
        

        return (
            <div>

            <Packery
                // ref={function(c) {if(c!==null){this.packers = c.packery;}}.bind(this)}
                ref="refGrid"
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {childElements}
            </Packery>
            </div>
        );
    }
});

module.exports = Gallery;

// var React = require('react');
// // var Packery = require('react-packery-component')(React);
// var Packery = require('packery');
//
// var pckry;
//
// // var packeryOptions = {
// //     transitionDuration: '300ms'
// // };
//
// var Gallery = React.createClass({
//     componentWillReceiveProps(nextProps){
//         let item = this.getItemElement();
//         // console.log('what?',item)
//         var fragment = document.createDocumentFragment();
//         fragment.appendChild( item );
//         var grid = document.querySelector('.grid');
//         grid.insertBefore( fragment, grid.firstChild );
//         pckry.prepended( item );
//     },
//     componentDidUpdate(){
//
//
//
//         // this.packery.prepended( item );
//     },
//     componentDidMount: function () {
//
//         pckry = new Packery('.grid', {
//             itemSelector: '.grid-item',
//             gutter: 0,
//             transitionDuration: '0.4s'
//         });
//         // loader = this.refs['loader'];
//         // console.log("IF ITS MOBILE ITS DOESNT INIT PAckery!!!!!!")
//     },
//     getItemElement() {
//       var item = document.createElement('div');
//       // add width and height class
//       var wRand = Math.random();
//       var hRand = Math.random();
//       var widthClass = wRand > 0.85 ? 'grid-item--width3' : wRand > 0.7 ? 'grid-item--width2' : '';
//       var heightClass = hRand > 0.85 ? 'grid-item--height3' : hRand > 0.5 ? 'grid-item--height2' : '';
//       item.className = 'grid-item ' + widthClass + ' ' + heightClass;
//       return item;
//     }
//     ,
//     render: function () {
//         var childElements = this.props.elements.map(function(element,index){
//            return (
//                 <div key={index} className={"grid-item " + (element.id % 10 > 5 ? 'grid-item--width2' : element.id % 10 < 2 ? 'grid-item--height2' : '')} >
//                                     <p>{index}{element.id}</p>
//                   </div>
//             );
//         });
//
//         return (
//
//                                 <div ref="myGridItem" className="grid">
//
//                 {childElements}
//                                     </div>
//         );
//     }
// });
//
// module.exports = Gallery;
