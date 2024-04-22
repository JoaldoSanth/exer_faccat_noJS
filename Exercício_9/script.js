var salarioatual, reajuste, novosalario

alert ("Vamos calcular o reajuste do seu salário");
var salarioatual = parseFloat(prompt("Digite o seu salário atual"));
var reajuste = parseFloat(prompt("Digite o reajuste em porcentagem do seu salário"));

var novosalario=parseFloat(salarioatual * reajuste / 100 + salarioatual);

alert("Seu novo salário será de: " +novosalario);