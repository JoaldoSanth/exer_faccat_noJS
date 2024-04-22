let numero1
let numero2
let numero3
let mediaExercicios
let mediaAproveitamento = parseFloat
let conceito = String

   numero1=parseFloat(prompt("Digite a nota da primeira verificação: "))
   numero2=parseFloat(prompt("Digite a nota da segunda verificação: "))
   numero3=parseFloat(prompt("Digite a nota da terceira verificação: "))
   mediaExercicios=parseFloat(prompt("Digite a média dos exercícios: "))

   mediaAproveitamento = (numero1 + numero2 * 2 + numero3 * 3 + mediaExercicios) / 7

   if (mediaAproveitamento >= 9.0)
      conceito = "A"
   else
      if (mediaAproveitamento >= 7.5)
         conceito = "B"
      else
         if (mediaAproveitamento >= 6.0)
            conceito = "C"
         else{
            conceito = "D"
         }
   alert("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2) + "\nConceito: " + conceito)