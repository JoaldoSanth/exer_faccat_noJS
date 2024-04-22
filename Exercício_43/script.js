let a, b, c

   a=parseFloat(prompt("Digite o valor de a: "))
   b=parseFloat(prompt("Digite o valor de b: "))
   c=parseFloat(prompt("Digite o valor de c: "))
   if (a < b + c && b < a + c && c < a + b)
      if (a == b && b == c)
         alert("Triângulo Equilátero")
      else
         if (a == b || b == c || a == c)
            alert("Triângulo Isósceles")
         else
            alert("Triângulo Escaleno")
   else
      alert("Não é possível formar um triângulo")