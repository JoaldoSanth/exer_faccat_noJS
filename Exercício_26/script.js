let atual
let maxima
let minima
let media
let total

   atual=parseFloat(prompt("coloque a quantidade atual")) 
   maxima=parseFloat(prompt("coloque a quantidade maxima"))
   minima=parseFloat(prompt("coloque a quantidade minima"))
   media = (maxima + minima) /2
   alert("a media do seu estoque é de" + media)
   if (atual >= media)
      alert("não efetuar a compra")
   else
      alert("efetua a compra")