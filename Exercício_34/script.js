let X
let Y
let Z = parseInt
let resposta
X=parseInt(prompt("Digite o valor de X"))
Y=parseInt(prompt("Digite o valor de Y"))
Z = (X*Y) + 5
if (Z <= 0)
resposta = "A"
else
if (Z <= 100)
resposta = "B"
else
resposta = "C"
alert(Z + (" ") + resposta)

/*         TABELA
X	  Y	    Z	    Resposta
3	  2	    11     B
150   3	    455    C
7	 -1	   -2      A
-2	  5	   -5      A  
*/