import _ from 'lodash';
import './style.css'
function component() {
    const element = document.createElement('div');
  
    // Lodash, was included via a script, is required for this line to work
    //Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack!, From index.js'], ' ');
    element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());