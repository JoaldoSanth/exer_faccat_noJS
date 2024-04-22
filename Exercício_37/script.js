let morangos
let macas
let preco_morango = parseFloat
let preco_macas = parseFloat
let quilos_total = parseFloat
let total_compra = parseFloat
let preco_final = parseFloat
let taxa_desconto = parseFloat

   morangos=parseFloat(prompt("Quantidade de morangos em Kg: "))
   macas=parseFloat(prompt("Quantidade de maçãs em Kg: "))
   if (morangos<=5 ){
    preco_morango = morangos * 2.5
    alert("Preço dos morangos é de: R$" + preco_morango.toFixed(2))
   }
   else{
    preco_morango = morangos * 2.2
    alert("Preço dos morangos é de: R$" + preco_morango.toFixed(2))
   }
   if (macas<= 5){
    preco_macas = macas * 1.8
    alert("Preço dos maçãs é de: R$" + preco_macas.toFixed(2))
   }
   else{
    preco_macas = macas * 1.5
    alert("Preço dos maçãs é de: R$" + preco_macas.toFixed(2))
   }
   quilos_total = morangos + macas
   total_compra = preco_macas + preco_morango
   alert("Preço total da compra foi de: R$" + total_compra.toFixed(2))
   if (quilos_total > 8 || total_compra > 25){
    taxa_desconto = 0.10 * total_compra
    preco_final = total_compra - taxa_desconto
    alert("Preço total da compra como desconto é de: R$" + preco_final.toFixed(2))
   }