/**
 * Created by Снежана on 06.08.2016.
 */
var React = require('react');

var AppearAnimation = React.createClass({
  getDefaultProps: function() {
    return {delay: 1000};
  },
  getInitialState: function(){
    return {visible: true};
  },
  componentWillReceiveProps: function(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({visible: true});
    }
  },
  componentDidMount: function() {
      this.setTimer();
  },
  setTimer: function() {
    // clear any existing timer
    this._timer != null ? clearTimeout(this._timer) : null;

    // hide after `delay` milliseconds
    this._timer = setTimeout(function(){
      this.setState({visible: false});
      this._timer = null;
    }.bind(this), this.props.delay);
  },
  componentWillUnmount: function() {
    clearTimeout(this._timer);
  },
  render: function() {
    console.log("her")
    return this.state.visible ?
    <div className={'grid-item ' + (this.props.element.id % 10 > 5 ?
            'grid-item--width2 ' : this.props.element.id % 10 < 2 ? 'grid-item--height2 ' : '')+" no-vis"} >
                {this.props.children}
    </div>
           :
           <div className={'grid-item ' + (this.props.element.id % 10 > 5 ?
            'grid-item--width2 ' : this.props.element.id % 10 < 2 ? 'grid-item--height2 ' : '')+" no-vis--vis"} >
                {this.props.children}
    </div>;
  }
});
module.exports = AppearAnimation;