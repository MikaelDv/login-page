const mostrarSenha = document.getElementById("lock");
const inputSenha = document.getElementById("password");

mostrarSenha.addEventListener("mouseenter", () => {
  mostrarSenha.style.cursor = "pointer";
});

mostrarSenha.addEventListener("click", () => {
  if (mostrarSenha.classList.contains("bx-lock-alt")) {
    mostrarSenha.classList.remove("bx-lock-alt");
    mostrarSenha.classList.add("bx-lock-open-alt");
    inputSenha.type = "text";
  } else {
    mostrarSenha.classList.remove("bx-lock-open-alt");
    mostrarSenha.classList.add("bx-lock-alt");
    inputSenha.type = "password";
  }
});
