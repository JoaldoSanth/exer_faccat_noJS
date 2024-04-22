alert ("Vamos calcular seus dias vividos!");

var anos =parseInt(prompt("Digite sua idade em anos: "));

var meses =parseInt(prompt("Digite a quantidade de meses desde seu aniversário: "));

var dias =parseInt(prompt("Digite a quantidade de dias desde seu mêsversário: "));

var resultado = anos * 365 + meses * 30 + dias

alert("A quantidade de dias vividos é de " + resultado);