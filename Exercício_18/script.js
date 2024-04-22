let ano;
let nascimento;
let voto;
nascimento = parseInt(prompt("Digite em que ano você nasceu:"));
ano = parseInt(prompt("Digite o ano atual:"));
voto = ano - nascimento;
if (voto > 18)
  alert("Seu voto é obrigatório");
  else{
    alert("Seu voto não é obrigatório");
  }