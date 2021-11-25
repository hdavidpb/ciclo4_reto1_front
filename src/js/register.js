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

const cleanField = () => {
  $email.value = "";
  $name.value = "";
  $password.value = "";
  $repeatPassword.value = "";
};

const handleSubmitData = async (data) => {
  console.log("Enviando");
  try {
    const response = await fetch("http://144.22.38.112:8080/api/user/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Usuario creado exitosamente!");
    console.log(await response.json());
    cleanField();
  } catch (error) {
    console.log(error);
    alert("AH OCURRIDO UN ERROR");
  }
};

$register.addEventListener("click", (e) => {
  e.preventDefault();

  if (!$name.value.trim()) {
    $nameContainer.classList.add("invalidField");
    return;
  } else {
    $nameContainer.classList.remove("invalidField");
  }

  if (!$email.value.trim() && !reg.test($email.value)) {
    $emailContainer.classList.add("invalidField");
    return;
  } else {
    $emailContainer.classList.remove("invalidField");
  }

  if (!$password.value.trim()) {
    $passwordContainer.classList.add("invalidField");
    return;
  } else {
    $passwordContainer.classList.remove("invalidField");
  }

  if (!$repeatPassword.value.trim()) {
    $repeatPasswordContainer.classList.add("invalidField");
    return;
  } else {
    $repeatPasswordContainer.classList.remove("invalidField");
  }

  if ($password.value.trim() && $repeatPassword.value.trim()) {
    if ($password.value !== $repeatPassword.value) {
      alert("Las contraseñas no coinciden");
      return;
    }
  }

  const data = {
    email: $email.value,
    password: $password.value,
    name: $name.value,
  };
  handleSubmitData(data);
});
