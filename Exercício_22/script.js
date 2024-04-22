let horas_mes
let salario_hora
let   salario_total = parseFloat
let   horas_extras =parseFloat
let   horas_semanais = parseInt
let   semanas_mes = parseInt

   horas_mes=parseFloat(prompt("Digite o número de horas trabalhadas por mês:"))
   salario_hora=parseFloat(prompt("digite o salário por hora:"))
   horas_semanais = 40
   semanas_mes = 4
   if (horas_mes <= horas_semanais * semanas_mes){
    salario_total = horas_mes * salario_hora
   }
   else{
    horas_extras = horas_mes - (horas_semanais * semanas_mes)
    salario_total = (horas_semanais * semanas_mes * salario_hora + horas_extras * salario_hora * 1.5)
   }
      alert("O salário total do funcionário é R$ " + salario_total)