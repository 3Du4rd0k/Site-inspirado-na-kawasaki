function onlyDigits(str) {
  return str.replace(/\D+/g, '');
}

function limparErros() {
  let spans = document.querySelectorAll(".erro");
  spans.forEach(span => span.textContent = "");
}

function validarFormulario(e) {
  e.preventDefault();
  limparErros();

  let valido = true;

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let endereco = document.getElementById("endereco").value.trim();
  let cep = document.getElementById("cep").value.trim();
  let cartao = document.getElementById("cartao").value.replace(/\s+/g,'');
  let cvv = document.getElementById("cvv").value.trim();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  let cepRegex = /^\d{5}-?\d{3}$/;
  let cartaoRegex = /^\d{13,19}$/;
  let cvvRegex = /^\d{3,4}$/;

  if (nome.length < 5) {
    document.getElementById("erro-nome").textContent = "Digite seu nome completo (mínimo 5 caracteres).";
    valido = false;
  }
  if (!emailRegex.test(email)) {
    document.getElementById("erro-email").textContent = "Digite um e-mail válido.";
    valido = false;
  }
  if (!cpfRegex.test(cpf)) {
    document.getElementById("erro-cpf").textContent = "Digite um CPF válido (000.000.000-00).";
    valido = false;
  }
  if (endereco.length < 5) {
    document.getElementById("erro-endereco").textContent = "Digite um endereço válido.";
    valido = false;
  }
  if (!cepRegex.test(cep)) {
    document.getElementById("erro-cep").textContent = "Digite um CEP válido (ex: 12345-678).";
    valido = false;
  }
  if (!cartaoRegex.test(cartao)) {
    document.getElementById("erro-cartao").textContent = "Digite um número de cartão válido (13 a 19 dígitos).";
    valido = false;
  }
  if (!cvvRegex.test(cvv)) {
    document.getElementById("erro-cvv").textContent = "Digite um CVV válido (3 ou 4 dígitos).";
    valido = false;
  }

  if (!valido) return false;

  // Se tudo certo, mostra popup


  return true;
}
