const $email = document.querySelector("#email");
const $emailContainer = document.querySelector("#username_container");

const $password = document.querySelector("#password");
const $passwordContainer = document.querySelector("#password_container");

const $alertEmail = document.querySelector(".alert_email");
const $alertPassword = document.querySelector(".alert_pass");
const emailRegExp = "^[^@]+@[^@]+.[^@]+";
const reg = new RegExp(emailRegExp);
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

/***********************VALIDATIONS***********************/

$email.addEventListener("change", (e) => {
  if (!reg.test($email.value)) {
    $emailContainer.classList.add("invalidField");
    $alertEmail.classList.remove("toogle");
    $emailContainer.classList.remove("validField");
  } else {
    $alertEmail.classList.add("toogle");
    $emailContainer.classList.remove("invalidField");
    $emailContainer.classList.add("validField");
  }
});

$password.addEventListener("change", (e) => {
  console.log("Sadasd");
  if (!$password.value.trim()) {
    $passwordContainer.classList.add("invalidField");
    $alertPassword.classList.remove("toogle");
    $passwordContainer.classList.remove("validField");
  } else {
    $alertPassword.classList.add("toogle");
    $passwordContainer.classList.remove("invalidField");
    $passwordContainer.classList.add("validField");
  }
});
const cleanField = () => {
  $email.value = "";

  $password.value = "";
};
const handleSubmit = async (email, password) => {
  console.log("Enviando");
  try {
    const response = await fetch(
      `http://144.22.38.112:8080/api/user/${email}/${password}`
    );
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.id === null) {
      alert("No tienes cuenta, debes registrarte!");
    } else {
      alert("BIENVENIDO!");
    }
  } catch (error) {
    alert("AH OCURRIDO UN ERROR");
    console.log(error);
  }
};

$login = document.querySelector("#login").addEventListener("click", (e) => {
  e.preventDefault();

  if (!reg.test($email.value)) {
    $emailContainer.classList.toggle("invalidField");
    return;
  }

  if (!$password.value.trim()) {
    $passwordContainer.classList.toggle("invalidField");
    return;
  }

  handleSubmit($email.value, $password.value);

  // console.log(reg.test($email.value));
  // console.log($email.value);
});
