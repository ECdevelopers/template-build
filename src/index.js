import * as bootstrap from 'bootstrap'
import { buttonHandle } from "./buttonHandler";
import css from './style/global.scss'



document.addEventListener('click',buttonHandle())

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());