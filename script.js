const email = document.getElementById('email');
const senha = document.getElementById('password');
const buttonPermission = document.getElementById('buttonPermission');

function permission() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonPermission.addEventListener('click', permission);
