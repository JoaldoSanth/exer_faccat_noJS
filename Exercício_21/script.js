let inicio;
let fim;
let hora;

inicio = parseInt(prompt("Que hora iniciou a partida de xadrez?"));
fim = parseInt(prompt("Que hora finalizou a partida de xadrez?"));
hora = fim - inicio;
if (hora > 24) 
alert("Essa partida, foi inválida, pois passou as 24 horas.");
else 
alert("Essa partida, durou " + hora + " horas.");
