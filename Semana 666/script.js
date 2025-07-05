const form = document.getElementById('registroForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const edad = document.getElementById('edad');
const enviarBtn = document.getElementById('enviarBtn');

const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const edadError = document.getElementById('edadError');

function validarNombre() {
  if (nombre.value.length < 3) {
    nombreError.textContent = 'El nombre debe tener al menos 3 caracteres.';
    return false;
  }
  nombreError.textContent = '';
  return true;
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = 'Correo electrónico no válido.';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  if (!regex.test(password.value)) {
    passwordError.textContent = 'Mínimo 8 caracteres, un número y un carácter especial.';
    return false;
  }
  passwordError.textContent = '';
  return true;
}

function validarConfirmPassword() {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
    return false;
  }
  confirmPasswordError.textContent = '';
  return true;
}

function validarEdad() {
  if (parseInt(edad.value) < 18 || isNaN(parseInt(edad.value))) {
    edadError.textContent = 'Debes ser mayor o igual a 18 años.';
    return false;
  }
  edadError.textContent = '';
  return true;
}

function validarFormulario() {
  const validaciones = [
    validarNombre(),
    validarEmail(),
    validarPassword(),
    validarConfirmPassword(),
    validarEdad()
  ];
  enviarBtn.disabled = !validaciones.every(Boolean);
}

nombre.addEventListener('input', validarFormulario);
email.addEventListener('input', validarFormulario);
password.addEventListener('input', validarFormulario);
confirmPassword.addEventListener('input', validarFormulario);
edad.addEventListener('input', validarFormulario);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!enviarBtn.disabled) {
    alert('¡Formulario enviado correctamente!');
    form.reset();
    enviarBtn.disabled = true;
  }
});

form.addEventListener('reset', function() {
  setTimeout(() => {
    nombreError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    edadError.textContent = '';
    enviarBtn.disabled = true;
  }, 0);
});
