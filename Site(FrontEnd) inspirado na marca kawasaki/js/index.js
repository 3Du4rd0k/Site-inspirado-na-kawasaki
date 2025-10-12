function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
    let soma = 0;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
  
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
}
  
document.addEventListener('DOMContentLoaded', () => {
    const usuarioSpan = document.getElementById('usuarioLogado');
    const user = localStorage.getItem('KawasakiMotosUser');

    if (user && usuarioSpan) {
        usuarioSpan.textContent = user;
    }
  
    const form = document.getElementById('formContato');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cpf = document.getElementById('cpf').value;
  
      if (!validarCPF(cpf)) {
        alert('CPF inválido! Por favor, verifique e tente novamente.');
        form.reset();
        return;
      }
  
      const successMessage = document.createElement('div');
      successMessage.className = 'alert alert-success mt-3';
      successMessage.textContent = 'Mensagem enviada com sucesso!';
      form.parentElement.appendChild(successMessage);
      form.reset();
  
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        localStorage.removeItem('KawasakiMotosUser'); // Remove o usuário do localStorage
        window.location.href = 'login.html'; // Redireciona para a página de login
      });
    }
  });