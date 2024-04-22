let valor1;
let total;

valor1 = parseFloat(prompt("Digite quantas maçãs você deseja"));
total = valor1 * 1.3;
if (valor1 <= 12) 
alert("O total é de R$" + total);
else {
  if (valor1 >= 12) total < -valor1 * 1.0;
  alert("O total é de R$" + total);
}
