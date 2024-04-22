let salario_fixo
let valor_vendas
let conta
let total
 
salario_fixo=parseFloat(prompt("Escreva quanto é o seu salário fixo mensal:"))
valor_vendas=parseFloat(prompt("Escreva quanto foi o valor das suas vendas neste mês:"))
if (valor_vendas <= 1500){
    conta = (valor_vendas * 3) / 100
    total = salario_fixo + conta
}
else{
    conta = (valor_vendas * 5) /100
    total = salario_fixo + conta
}
alert("Seu salário este mês, baseado no salário + comissão, foi de: " + total)
