// document.getElementById('backgroundMusic').muted = false
let containerContent = document.querySelector('.container-content')
let usernameContainer = document.getElementById('username')
let passwordContainer = document.getElementById('passwordContainer')
let emailContainer = document.getElementById('emailContainer')
let errorForm = document.getElementById('errorForm')

function checkUsername() {
  let username = document.querySelector('.usernameInput').value
  if (username.trim() === 'A') {
    passwordContainer.classList.remove('hiden')
    usernameContainer.disabled = true
    usernameContainer.classList.add('hiden')
  } else {
    showErrorForm()
  }
}

function checkPassword() {
  let password = document.getElementById('password').value
  if (password.trim() === 'B') {
    emailContainer.classList.remove('hiden')
    passwordContainer.disabled = true
    passwordContainer.classList.add('hiden')
  } else {
    showErrorForm()
  }
}

function checkEmail() {
  let email = document.getElementById('email').value
  if (email.trim() === 'C') {
    emailContainer.classList.add('hiden')
    window.location.href = 'letter2.html'
  } else {
    showErrorForm()
  }
}

function showErrorForm() {
  errorForm.classList.add('fe')
  setTimeout(function () {
    containerContent.classList.add('hiden')
  }, 1000)

  setTimeout(function () {
    errorForm.style.top = '20%'
  }, 10)
}

function hideErrorForm() {
  errorForm.classList.add('feh')
  errorForm.style.top = '-100vh'
  containerContent.classList.remove('hiden')
}
