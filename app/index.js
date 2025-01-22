import './vendor.js'
import { buttonHandle } from "./src/buttonHandler.js";
import css from './global.scss'
import _ from 'lodash';



document.addEventListener('click',buttonHandle())

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
console.log(_.toUpper("index nih bos"))

document.body.appendChild(component());