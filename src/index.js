import React from 'react'
import reactDom from 'react-dom'


// function Greeting () {
//   return <h4>This is Daniel and this is my first Component</h4>
// }
const Greeting = () =>{
  return React.createElement('div',{},React.createElement('h1',{},'Hello Daniel'))
}
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

reactDom.render(<Greeting/>, document.getElementById('root'));