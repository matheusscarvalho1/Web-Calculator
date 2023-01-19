var operacao = prompt ("Digite 1 para a soma, 2 para subtração, 3 para multiplicação ou 4 para divisão")
var primeiroValor = parseInt (prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

if (operacao == 1){
   var  resultado = primeiroValor + segundoValor
   document.write("<h2>"+ primeiroValor + "+" + segundoValor + " = "+        resultado +"</h2>")
}

else if (operacao == 2){
  var  resultado = primeiroValor - segundoValor
  document.write("<h2>"+ primeiroValor + "-" + segundoValor + " = "+         resultado +"</h2>")
}

else if (operacao == 3){
  var  resultado = primeiroValor * segundoValor
  document.write("<h2>"+ primeiroValor + "x" + segundoValor + " = "+         resultado +"</h2>")
}

else if (operacao == 4){
  var  resultado = primeiroValor / segundoValor
  document.write("<h2>"+ primeiroValor + "/" + segundoValor + " = "+         resultado +"</h2>")
}

else{
    document.write("<h2>Opção Inválida</h2>")
}

/*
Escrever na tela, concatenação[texto+variável] - document.write() 
if - se / else - senão / elseif senão se
== - Comparação | = - Atribuição
*/