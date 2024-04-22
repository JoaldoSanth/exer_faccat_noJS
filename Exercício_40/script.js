let nome
let quantidade_adquirida
let preco_unitario
let total = parseFloat
let total_pagar = parseFloat
let desconto = parseFloat

   nome=String(prompt("Digite o nome do produto que queira adquirir"))
   quantidade_adquirida=parseFloat(prompt("Digite a quantidade adquirida do produto: "))
   preco_unitario=parseFloat(prompt("Digite o preço unitário do produto: "))
   total = quantidade_adquirida * preco_unitario
   if (quantidade_adquirida <= 5)
      desconto = total * 0.02
     else
      if (quantidade_adquirida > 5 && quantidade_adquirida <=10)
         desconto = total * 0.03
        else{
            if (quantidade_adquirida > 10)
            desconto = total * 0.05
        }
   total_pagar = total - desconto
   
   alert("O produto que você escolheu está saindo por R$: " + total_pagar.toFixed(2) + "\nO desconto foi de R$: " + desconto.toFixed(2));

