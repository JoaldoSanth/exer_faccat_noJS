let codigo
let nascimento
let ingresso

codigo=parseInt(prompt("Digite seu código de funcionário (exemplo: 1234): "))
nascimento=parseInt(prompt("Digite o ano em que você nasceu: "))
ingresso=parseInt(prompt("Digite o ano do seu ingresso na empresa: "))

if (nascimento <= 1959 || ingresso <= 1996)
   alert("Requerer aposentadoria!")
else
   alert("Não requer aposentadoria")
   if (nascimento <= 1964 && ingresso <= 1999)
      alert("Requerer aposentadoria")
   else
      alert("Não requer aposentadoria")