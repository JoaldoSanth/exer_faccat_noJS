var taxatotal, valorveiculo, custofabrica;

alert ("Vamos fazer a conta do custo de fábrica + impostos de um carro.");

var custofabrica=parseFloat(prompt("Digite o custo de fábrica do modelo do carro: "));

taxatotal=(73/100);

valorveiculo=(custofabrica * taxatotal + custofabrica);

alert("O custo do veículo para o consumidor será: " + valorveiculo);