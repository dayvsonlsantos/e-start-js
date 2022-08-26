//1)      Criar um array com os nomes de 7 cidades de Pernambuco:

let cidadesPE = ["Recife", "Camaragibe", "Caruaru", "Toritama", "Santa Cruz do Capibaribe", "Paulista", "Olinda"]

//a)       Ordenar seus elementos na ordem invertida.
//b)      Exibir no console.

console.log(cidadesPE.reverse())

//c)    Adicionar duas cidades usando splice().

cidadesPE.splice(2, 0, "São Lourenço da Mata", "Jaboatão dos Guararapes");

//d)      Exibir no console.

console.log(cidadesPE)

//2)      Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5

let valores = [1,4,8,6,9,2,6,7,3,0,5]

//a)       Obter qual o index onde está o elemento 9.

//b)      Exibir no console qual a posição no array em que o elemento 9 está.

console.log(valores.indexOf(9));