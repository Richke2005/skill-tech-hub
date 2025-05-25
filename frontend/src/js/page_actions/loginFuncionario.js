// loginFuncionario.js

// Aguarda o DOM estar totalmente carregado para garantir que o formulário exista
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado. Script loginFuncionario.js funcionando corretamente.");

  const form = document.getElementById("login-form"); // Assumindo que o formulário terá este ID
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!form) {
    console.error("Formulário de login não encontrado (id='login-form').");
    return;
  }

  // Escuta o evento 'submit' do formulário para capturar o envio
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/login", { // Sua URL para o endpoint de login
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao fazer login.");
        return;
      }

      const userId = data?._id;
      if (!userId) {
        alert("ID do usuário não encontrado na resposta.");
        return;
      }

      // Armazena o ID do usuário localmente (mantendo ambas as formas de armazenamento)
      sessionStorage.setItem("user_id", userId);
      localStorage.setItem("loggedUserId", userId);

      alert("Login realizado com sucesso!");
      // Redireciona para a página de perfil como na versão do colaborador,
      // pois é um destino mais comum após o login bem-sucedido.
      // Se 'home.html' for a intenção real, ajuste aqui.
      window.location.href = "./perfil.html"; 

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro de rede ao tentar fazer login.");
    }
  });
});