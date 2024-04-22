let valor_A;
let valor_B;
let valor_C;
let true1;
let true2;
let true3;

valor_A = parseInt(prompt("Digite o primeiro valor do triângulo: "));
valor_B = parseInt(prompt("Digite o segundo valor do triângulo: "));
valor_C = parseInt(prompt("Digite o terceiro valor do triângulo: "));
if (valor_A < valor_B + valor_C) true1 = true;
else true1 = false;
if (valor_B < valor_A + valor_C) true2 = true;
else true2 = false;
if (valor_C < valor_A + valor_B) true3 = true;
else true3 = false;
if (true1 == true && true2 == true && true3 == true)
  alert("Os valores dos 3 lados formam um triângulo!");
else 
alert("Os valores dos 3 lados não formam um triângulo!");
