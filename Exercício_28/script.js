let valor1
let valor2
let valor3
let total

   valor1=parseInt(prompt("Digite um primeiro valor:"))
   valor2=parseInt(prompt("Digite um segundo valor:"))
   valor3=parseInt(prompt("Digite um terceiro valor:"))
   if (valor1 > valor2 && valor1 > valor3)
      alert("O maior valor é: " + valor1)
   else
      if (valor2 > valor1 && valor2 > valor3)
         alert("O maior valor é: " + valor2)
      else
         if (valor3 > valor2 && valor3 > valor1)
            alert("O maior valor é o " + valor3)
         else
            if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3)
               alert("Não existe numero maior, pois são iguais")
