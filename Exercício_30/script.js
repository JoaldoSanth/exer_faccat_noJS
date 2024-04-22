let valor1
let valor2
let valor3

   valor1=parseInt(prompt("Digite um primeiro valor:"))
   valor2=parseInt(prompt("Digite um segundo valor:"))
   valor3=parseInt(prompt("Digite um terceiro valor:"))
   if (valor1 < valor2 && valor1 < valor3)
      if (valor2 < valor3)
         alert("A ordem fica"+ valor1 +valor2 + valor3)
      else
         alert("A ordem fica" + valor1 + valor3 + valor2)
   else
      if (valor2 < valor1 && valor2 < valor3)
         if (valor1 < valor3)
            alert("A ordem fica" + valor2 + valor1 + valor3)
         else
            alert("A ordem fica"+ valor2 +valor3 + valor1)
         
      else
         if (valor3 < valor1 && valor3 < valor2)
            if (valor1 < valor2)
               alert("A ordem fica"+ valor3 + valor1 + valor2)
            else
               alert("A ordem fica"+ valor3 + valor2 + valor1)