import { components } from '../view/index.js';
import registerController from './register-controller.js';

export const changeView = (hash) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      registerController();
      break;
    default:
      break;
  }
};
