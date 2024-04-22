let time_A
let time_B
let gols_A
let gols_B

   time_A=String(prompt("Escreva qual o primeiro time"))
   time_B=String(prompt("Escreva qual o segundo time"))
   gols_A=parseInt(prompt("Quantos gols foram marcados pelo time_A?"))
   gols_B=parseInt(prompt("Quantos gols foram marcados pelo time_B?"))
   if (gols_A > gols_B)
      alert("O " + time_A + " está ganhando do " + time_B)
   else
      if (gols_A == gols_B)
         alert("Os times estão empatando")
      else
         alert("O " + time_B + " está ganhando do " + time_A)