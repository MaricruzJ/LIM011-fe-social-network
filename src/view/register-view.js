import registerUserEmailEvent, { passwordShow } from '../controller/register-controller.js';

export default () => {
  const registerView = `
    <section class='section-banner'>
      <div class='container-banner'>
        <p> Sé parte de esta red,<span class='c-green'> promociona y encuentra</span> <span >talento.</span>  </p>
      </div> 
    </section>
    <section class='section-main'>
      <div class='container-logo'>
        <img src='./img/logo.png' alt='logo' class='icon-logo-main'>
      </div>
      <p>Bienvenidx!</p>
      <form>
        <input id='username' type='text' class='input-text' placeholder='Nombre de usuario'>      
        <input id='email-register' type='email' class='input-text'  placeholder='Correo Electronico'>
        <div class='pass-eye'> 
          <input type='password' class='input-password' id='password-register' placeholder='Password' required>
          <img src="https://img.icons8.com/material-rounded/24/000000/visible.png" id="btn-eye" class="eye-class">
        </div>
        <span class='errors' id='error-message'></span>
        <span class='errors' id='error-password'></span>
        <span class='errors' id='error-email'></span>
        <button id='btn-register' class='btn btn-general' type='submit'>REGISTRAME</button>
      </form>
    </section> `;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  const btnRegister = mainElem.querySelector('button');
  btnRegister.addEventListener('click', registerUserEmailEvent);
  const showPass = mainElem.querySelector('#btn-eye');
  showPass.addEventListener('click', passwordShow);
  return mainElem;
};
