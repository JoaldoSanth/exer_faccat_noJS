let homem1
let homem2
let mulher1
let mulher2
let soma
let soma2

   homem1=parseInt(prompt("Digite a idade do homem1"))
   homem2=parseInt(prompt("Digite a idade do homem2"))
   mulher1=parseInt(prompt("Digite a idade do mulher1"))
   mulher2=parseInt(prompt("Digite a idade do mulher2"))

   if (homem1 > homem2 &&  mulher1 > mulher2){
    soma = homem1 + mulher2
    soma2 = homem2 + mulher1
    alert("A soma do homem mais velho com a mulher mais nova é de: " + soma)
    alert("A soma do homem mais novo com a mulher mais velha é de: " + soma2)
   }
   else
      if (homem1 > homem2 && mulher2 > mulher1){
        soma = homem1 + mulher1
        soma2 = homem2 + mulher2
        alert("A soma do homem mais velho com a mulher mais nova é de: " + soma)
        alert("A soma do homem mais novo com a mulher mais velha é de: " + soma2)
      } 
      else
         if (homem2 > homem1 && mulher1 > mulher2){
            soma = homem2 + mulher2
            soma2 = homem1 + mulher1
            alert("A soma do homem mais velho com a mulher mais nova é de: " + soma)
            alert("A soma do homem mais novo com a mulher mais velha é de: " + soma2)
         }
         else
            if (homem1 == homem2 || mulher1 == mulher2)
               alert("não será efetuada soma nenhuma, pois são idades iguais")
            else
               if (homem2 > homem1 && mulher2 > mulher1)
                  soma = homem2 + mulher1
                  soma2 = homem1 + mulher2
                  alert("A soma do homem mais velho com a mulher mais nova é de: " + soma)
                  alert("A soma do homem mais novo com a mulher mais velha é de: " + soma2)