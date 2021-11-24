const $name = document.querySelector("#register__name");
const $nameContainer = document.querySelector("#register__name_container");

const $email = document.querySelector("#register__email");
const $emailContainer = document.querySelector("#register__username_container");

const $password = document.querySelector("#register__password");
const $passwordContainer = document.querySelector(
  "#register__password_container"
);

const $repeatPassword = document.querySelector("#register__repeat__password");
const $repeatPasswordContainer = document.querySelector(
  "#register__repeat__password_container"
);

const $alertEmail = document.querySelector(".resgister__alert_email");
const $alertPassword = document.querySelector(".register__alert_pass");

const $register = document.querySelector("#register");
/***********************ANIMATE***********************/
$email.addEventListener("focus", () => {
  $emailContainer.classList.toggle("onFocus");
});

$email.addEventListener("blur", () => {
  $emailContainer.classList.toggle("onFocus");
});

$password.addEventListener("focus", () => {
  $passwordContainer.classList.toggle("onFocus");
});

$password.addEventListener("blur", () => {
  $passwordContainer.classList.toggle("onFocus");
});

$name.addEventListener("focus", () => {
  $nameContainer.classList.toggle("onFocus");
});

$name.addEventListener("blur", () => {
  $nameContainer.classList.toggle("onFocus");
});

$repeatPassword.addEventListener("focus", () => {
  $repeatPasswordContainer.classList.toggle("onFocus");
});

$repeatPassword.addEventListener("blur", () => {
  $repeatPasswordContainer.classList.toggle("onFocus");
});

const emailRegExp = "^[^@]+@[^@]+.[^@]+";
const reg = new RegExp(emailRegExp);

$register.addEventListener("click", (e) => {
  e.preventDefault();

  if (!reg.test($email.value)) {
    alert("Email no valido");
    return;
  }

  if ($password.value !== $repeatPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  if (!$name.value.trim()) {
    alert("Debe completar el campo de nombre");
  }
});
