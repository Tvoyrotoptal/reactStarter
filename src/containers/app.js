import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    return <div>
      <p>Привет из App, {name} {surname}!</p>
      <p>Тебе уже {age} ?</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)






// import React, { Component } from 'react';
// import Gallery from './../components/gallery'
//
// var customElements=[{
//     src :'https://facebook.github.io/react/img/logo.svg',
//     text:'onene',
//     id:1
// },
//     {
//     src :'https://facebook.github.io/react/img/logo.svg',
//     text:'onene',
//         id:2
// },
//     {
//     src :'https://facebook.github.io/react/img/logo.svg',
//     text:'onene',
//
//         id:3
// },
//     {
//     src :'https://facebook.github.io/react/img/logo.svg',
//     text:'onene',
//          id:4
// },
//     {
//     src :'https://facebook.github.io/react/img/logo.svg',
//     text:'onene',
//
//          id:5
// }
// ]
// function initPackery() {
//     var grid = document.querySelector('.my-gallery-class');
//     var pckry = new Packery( grid, {
//     itemSelector: '.image-element-class'
//     });
//     console.log('im rendered',grid,pckry);
// }
// setTimeout(concatArray,1000);
// function concatArray(){
//     customElements.push({src :'https://facebook.github.io/react/img/logo.svg',
//     text:'onene',
//          id:6})
//     console.log(customElements,"zapushil")
// }
// export default class App extends Component {
//         componentDidMount(){
//     initPackery();
//     }
//   render() {
//     return (
//       <div>Super done it well
//
//         <Gallery elements = {customElements} />
//       </div>
//     );
//   }
// }
