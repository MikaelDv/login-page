const showPassword = document.getElementById("lock");
const inputPassword = document.getElementById("password");
const inputUser = document.getElementById("username");
const form = document.getElementById("loginForm");

const userList = [
  { user: "Mikael", password: "mikaelamajujuba02" },
  { user: "adm", password: "010203" },
];

showPassword.addEventListener("mouseenter", () => {
  showPassword.style.cursor = "pointer";
});

showPassword.addEventListener("click", () => {
  if (showPassword.classList.contains("bx-lock-alt")) {
    showPassword.classList.remove("bx-lock-alt");
    showPassword.classList.add("bx-lock-open-alt");
    inputPassword.type = "text";
  } else {
    showPassword.classList.remove("bx-lock-open-alt");
    showPassword.classList.add("bx-lock-alt");
    inputPassword.type = "password";
  }
});

function verifyCredentials() {
  for (let x = 0; x < userList.length; x++) {
    if (
      userList[x].user === inputUser.value &&
      userList[x].password === inputPassword.value
    ) {
      return true;
    } else {
    }
  }
  return false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (verifyCredentials()) {
    alert("Login efetuado com sucesso!");
  } else {
    form.classList.add("shake");
    inputPassword.parentElement.classList.add("inptError");
    inputUser.parentElement.classList.add("inptError");

    setTimeout(() => form.classList.remove("shake"), 500);

    setTimeout(() => {
      inputPassword.parentElement.classList.remove("inptError");
      inputUser.parentElement.classList.remove("inptError");
    }, 600);
  }
  form.reset();
});
