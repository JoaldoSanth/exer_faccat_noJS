let numero_conta;
let saldo;
let debito;
let credito;
let total_saldo;

numero_conta = parseFloat(prompt("Digite o número da  sua conta do banco"));
saldo = parseFloat(prompt("Digite o seu saldo:"));
debito = parseFloat(prompt("Digite o seu débito:"));
credito = parseFloat(prompt("Digite o crédito: "));
total_saldo = saldo - debito + credito;
alert("O saldo atual é: " + total_saldo);
if (total_saldo >= 0) 
alert("Saldo Positivo");
else 
alert("Saldo Negativo");
