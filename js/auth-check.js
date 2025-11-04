document.addEventListener('DOMContentLoaded', function () {
    const STORAGE_KEY = 'KawasakiMotosUser'; // Deve ser a mesma chave usada no login.js
  
    const savedUser = localStorage.getItem(STORAGE_KEY);
    if (!savedUser) {
      // Redireciona para a página de login se o usuário não estiver autenticado
      window.location.href = 'login.html';
    }
  });