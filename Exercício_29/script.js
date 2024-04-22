let valor1
let valor2
let valor3
let soma

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   valor1=parseInt(prompt("Digite o primeiro valor:"))
   valor2=parseInt(prompt("Digite o segundo valor:"))
   valor3=parseInt(prompt("Digite o terceiro valor:"))
   if (valor1 > valor2 && valor1 > valor3)
      if (valor2 > valor3){
        soma = valor1 + valor2
        alert("O valor da soma dos dois valores é de:"+ soma)
      }
      else{
        soma = valor1 + valor3
        alert("O valor da soma dos dois valores é de:"+ soma)
      }  
   else
      if (valor2 > valor3 && valor2 > valor1)
         if (valor3 > valor1){
            soma = valor2 + valor3
            alert("O valor da soma dos dois valores é de:"+ soma)
         }
      else{
        soma = valor2 + valor1
        alert("O valor da soma dos dois valores é de:"+ soma)
      }     
      else
         if (valor3 > valor1 && valor3 > valor2)
            if (valor2 > valor1){
                soma = valor3 + valor1
                alert("O valor da soma dos dois valores é de:"+ soma)
            }
            else
               soma = valor3 + valor2
               alert("O valor da soma dos dois valores é de:"+ soma)