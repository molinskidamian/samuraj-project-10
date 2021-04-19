const showPassword = document.querySelector('.showPassword');
const password = document.querySelector('.password');
const secretDiv = document.querySelector('.secret');
const progress = document.querySelector('progress');

const correctPassword = 'damian';

let passwordVisibility = false;
let phrase = '';
let progressNum = 0;

const secretMessage = 'Teraz możesz przeczytać tajną wiadomość!';

function showMePassword() {
  if (!passwordVisibility) {
    showPassword.classList.remove('fa-eye');
    showPassword.classList.add('fa-eye-slash');
    passwordVisibility = true;
    password.removeAttribute('type');
    password.setAttribute('type', 'text');
  } else if (passwordVisibility) {
    showPassword.classList.add('fa-eye');
    showPassword.classList.remove('fa-eye-slash');
    passwordVisibility = false;
    password.removeAttribute('type');
    password.setAttribute('type', 'password');
  }
}

function progressBar() {
  phrase = password.value;
  console.log(phrase.length);
  if (phrase.length >= 3) {
    progressNum += 1;
  }

  if (phrase.length > 6) {
    progressNum += 1;
  }

  if (phrase == correctPassword) {
    progressNum += 6;
  }

  progress.value = progressNum;
}

function checkPassword(e) {
  if (e.keyCode === 13) {
    console.log('Sprawdzam hasło');
    if (correctPassword !== password.value) {
      console.log('Hasło jest niepoprawne');
      secretDiv.textContent = 'Secret messages';
      secretDiv.style.backgroundColor = '#292a2d';
    } else {
      console.log('Hasło jest poprawne');
      secretDiv.textContent = secretMessage;
      secretDiv.style.backgroundColor = '#202020';
    }
  }
}

// function showKeyCode(e) {
//   console.log(e.keyCode);
// }

showPassword.addEventListener('mousedown', showMePassword);
showPassword.addEventListener('mouseup', showMePassword);
password.addEventListener('change', progressBar);
password.addEventListener('keydown', checkPassword);

// document.body.addEventListener('keydown', showKeyCode);
