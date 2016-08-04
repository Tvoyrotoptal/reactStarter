var React = require('react');
var Packery = require('react-packery-component')(React);

var packeryOptions = {
    transitionDuration: 0,
    gutter:10

};
var packery;
var Gallery = React.createClass({
    componentDidMount: function() {
        // this.masonry.on('layoutComplete', this.handleLayoutComplete);
        if(!(Object.keys(this.props.updated).length === 0 && this.props.updated.constructor === Object)) {
            console.log(this.packery)
            this.packery.prepended()
        }
        },
    clickHandler:()=>{
    console.log("yo")
    }
    ,
    render: function () {
        console.log(this.props.updated)
        const refToClass = this;
        var childElements = this.props.elements.map(function(element){
           return (
                <div key={element.id} onClick={refToClass.clickHandler}
                  className={"grid-item " + (element.id % 10 > 5 ? 'grid-item--width2' : element.id % 10 < 2 ? 'grid-item--height2' : '')}>
                    <p>{element.native_title}</p>
                </div>
            );
        });
        if(!(Object.keys(this.props.updated).length === 0 && this.props.updated.constructor === Object)) {
            var uElements = (element,thisRef) => {
                return (
                    <div key={element.id} onClick={thisRef.clickHandler}
                      className={"grid-item " + (element.id % 10 > 5 ? 'grid-item--width2' : element.id % 10 < 2 ? 'grid-item--height2' : '')}>
                        <p>{element.native_title}</p>
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
                   uElements(this.props.updated,refToClass):null
            }
                {childElements}

            </Packery>

        );
    }
});

module.exports = Gallery;