let nome
let sexo
let peso_ideal
let altura

   nome=String(prompt("Escreva seu nome:"))
   sexo=String(prompt("Escreva seu Genêro M/F:")) 
   altura=parseFloat(prompt("Escreva sua altura"))
   if (sexo = "M")
      peso_ideal = (72.7 * altura) - 58
   else
      if (sexo = "F")
         peso_ideal = (62.1 * altura) - 44.7
         alert(peso_ideal)