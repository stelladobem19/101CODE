// Alterna visibilidade dos formulários
function mostrarCadastro() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("cadastroForm").classList.remove("hidden");
  document.getElementById("form-title").innerText = "📝 Criar Conta";
}

function mostrarLogin() {
  document.getElementById("cadastroForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("form-title").innerText = "Entrar na Plataforma";
}

// Cadastro
document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const telefone = this.telefone.value.trim();
  const email = this.email.value.trim();
  const senha = this.senha.value.trim();

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find(u => u.email === email)) {
    alert("Este e-mail já está cadastrado.");
    return;
  }

  users.push({ nome, telefone, email, senha });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Cadastro realizado com sucesso!");
  mostrarLogin();
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.email.value.trim();
  const senha = this.password.value.trim();

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.senha === senha);

  if (user) {
    alert(`Bem-vindo, ${user.nome}!`);
    // Salva o usuário logado para uso posterior (como no certificado)
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html"; // Redireciona para o dashboard
  } else {
    alert("E-mail ou senha incorretos.");
  }
});
