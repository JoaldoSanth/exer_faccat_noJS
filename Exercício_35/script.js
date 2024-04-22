let preco_gasolina = parseFloat;
let preco_alcool = parseFloat;
let litros_vendidos;
let tipo_combustivel;
let desconto = parseFloat;
let valor_a_pagar = parseFloat;

preco_gasolina = 3.3;
preco_alcool = 2.9;
litros_vendidos = parseFloat(prompt("Digite o número de litros vendidos: "));
tipo_combustivel = String(
  prompt("Digite o tipo de combustível (A-álcool, G-gasolina): ")
);
if (tipo_combustivel == "A")
  if (litros_vendidos <= 20) 
  desconto = litros_vendidos * 0.03 * preco_alcool;
  else 
  desconto = litros_vendidos * 0.05 * preco_alcool;
else 
if (tipo_combustivel == "G")
  if (litros_vendidos <= 20) 
  desconto = litros_vendidos * 0.04 * preco_gasolina;
  else
   desconto = litros_vendidos * 0.06 * preco_gasolina;
else 
alert("Tipo de combustível inválido!");
if (tipo_combustivel == "A") {
  valor_a_pagar = litros_vendidos * preco_alcool - desconto;
  alert("Valor a ser pago pelo cliente: R$ " + valor_a_pagar.toFixed(2));
} else 
if ((tipo_combustivel = "G")) {
  valor_a_pagar= litros_vendidos * preco_gasolina - desconto;
  alert("Valor a ser pago pelo cliente: R$ " + valor_a_pagar.toFixed(2));
}
