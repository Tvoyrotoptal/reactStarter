var React = require('react');
var Packery = require('react-packery-component')(React);

var packeryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({
    componentDidMount: function() {
        // if(this.props.elements.length!==0){
        // this.packery.on('layoutComplete', this.handleLayoutComplete);}
    },
    render: function () {
        var childElements = this.props.elements.map(function(element){
           return (
                <div key={element.id} className="grid-item">
                    <p>{element.native_title}</p>
                </div>
            );
        });



        return (
            <Packery
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
                // ref={function(c) {if(this.props.elements.length!==0){

            >
                {childElements}

            </Packery>

        );
    }
});

module.exports = Gallery;