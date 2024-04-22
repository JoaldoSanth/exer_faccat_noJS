let nota1;
let nota2;
let avaliativa = parseFloat;

nota1 = parseInt(prompt("digite sua primeira nota do 4°bimestre"));
nota2 = parseInt(prompt("digite sua segunda nota do 4°bimestre"));
avaliativa = (nota1 + nota2) / 2;
if (avaliativa > 5.9) 
alert("você foi aprovado");
else {
  alert("você foi reprovado");
}
alert("sua media doi de: " + avaliativa);
