document.addEventListener('DOMContentLoaded', function () {
    const CREDENTIALS = {
      USER: 'teste@teste',
      PASSWORD: 'teste',
      STORAGE_KEY: 'KawasakiMotosUser'
    };
  
    const loginForm = document.getElementById('loginForm');
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');
    const rememberMe = document.getElementById('rememberMe');
    const loginError = document.getElementById('loginError');
  
    if (!loginForm || !userInput || !passwordInput || !rememberMe || !loginError) {
      console.error('Elementos do formulário não encontrados!');
      return;
    }
  
    const savedUser = localStorage.getItem(CREDENTIALS.STORAGE_KEY);
    if (savedUser) {
      userInput.value = savedUser;
      rememberMe.checked = true;
      passwordInput.focus();
    }
  
    function validateCredentials(user, password) {
      return user === CREDENTIALS.USER && password === CREDENTIALS.PASSWORD;
    }
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      userInput.classList.remove('is-invalid');
      passwordInput.classList.remove('is-invalid');
      loginError.classList.add('d-none');
  
      const user = userInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!validateCredentials(user, password)) {
        userInput.classList.add('is-invalid');
        passwordInput.classList.add('is-invalid');
        loginError.textContent = 'Credenciais inválidas. Tente novamente.';
        loginError.classList.remove('d-none');
        return;
      }
  
      // Salvar usuário logado no localStorage
      localStorage.setItem(CREDENTIALS.STORAGE_KEY, user);
  
      loginError.classList.remove('alert-danger');
      loginError.classList.add('alert-success');
      loginError.textContent = 'Autenticação bem-sucedida. Redirecionando...';
      loginError.classList.remove('d-none');

      
    
  
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });

  });
  