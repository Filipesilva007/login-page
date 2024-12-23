document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault(); // Impede o envio do formulário antes de validar

let valid = true; // Inicializar a variável para verificar se os campos estão válidos.
                                                                              
// Valida o email
valid = validateField(
  document.getElementById("email"),
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  "Por favor, insira um email válido."
) && valid; // Combina com o estado atual de `valid`.
                                                                              
// Valida a senha
valid = validateField(
document.getElementById("password"),
/^.{6,}$/,
"A senha deve ter no mínimo 6 caracteres."
) && valid; // Combina com o estado atual de `valid`.

// Se todos os campos forem válidos
if (valid) {
  alert("Login feito com sucesso!");
}
});
                                                                              
// Função que valida o campo

function validateField(input, regex, message) {
const isValid = regex.test(input.value); // Testa o valor do campo
const errorElement = input.nextElementSibling; // Coleta o elemento de erro
                                                                              
// Exibe ou oculta a mensagem de erro conforme a validade do campo
if (errorElement) {
  errorElement.textContent = isValid ? "" : message;
  errorElement.style.display = isValid ? "none" : "block";
}

// Altera a borda do campo conforme a validade
input.style.borderColor = isValid ? "#ccc" : "#e74c3c";

return isValid;

}

