let usuario
let senha

   usuario=parseInt(prompt("Digite o código de usuário: "))
   if (usuario != 1234)
      alert("Usuário inválido!")
   else
      senha=parseInt(prompt("Digite a senha: "))
      if (senha != 9999)
         alert("Senha incorreta!")
      else
         alert("Acesso permitido")