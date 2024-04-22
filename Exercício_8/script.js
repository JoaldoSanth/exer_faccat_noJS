var totaleleitores, votosbrancos, votosnulos, votosvalidos, porcentagemValidos, porcentagemBrancos, porcentagemNulos, porcentagemTotal

alert ("Vamos ler o total de eleitores e apresentar a porcentagem de cada um dos tipos de votos")

var totaleleitores = parseInt(prompt("Digite o total de eleitores: "));
var votosbrancos = parseInt(prompt("Digite o total de votos brancos: "));
var votosnulos = parseInt(prompt("Digite o total de votos nulos: "));
var votosvalidos = parseInt(prompt("Digite o total de votos válidos: "));

var porcentagemBrancos= (votosbrancos / totaleleitores * 100);
var porcentagemNulos= (votosnulos / totaleleitores * 100);
var porcentagemValidos= (votosvalidos / totaleleitores * 100);

alert("Porcentagem de votos brancos: " +porcentagemBrancos + "%")
alert("Porcentagem de votos brancos: " +porcentagemNulos + "%")
alert("Porcentagem de votos brancos: " +porcentagemValidos + "%")
