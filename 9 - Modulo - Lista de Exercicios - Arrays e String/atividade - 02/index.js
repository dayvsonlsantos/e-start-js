//1)      Criar variáveis strings e concatenar:

//a)       Criar uma variável chamada palavra1 e que tenha a string com o valor “Aprendendo” dentro dela.

let palavra1 = "Aprendendo";

//b)      Criar mais uma variável chamada palavras com a string com o valor “strings em JavaScript”

let palavras = "strings em JavaScript";

//c)       Exibir no console a frase “Aprendendo strings em JavaScript”.

console.log(palavra1 + " " + palavras)



//2)      Criar variáveis strings:

//a)       Criar 3 variáveis com os nomes palavra1, palavra2, palavra3, cada uma contendo uma palavra igual ao nome da variável correspondentes (ex.: let palavra1= “palavra1”);

palavra1 = "palavra1";
let palavra2 = "palavra2";
let palavra3 = "palavra3";

//b)      Criar mais 3 variáveis chamadas frase1, frase2, frase2. Cada uma iniciará com “Esta é a frase com a ” mais a palavra correspondente.

let frase1 = "Esta é a frase com a ";
let frase2 = "Esta é a frase com a ";
let frase3 = "Esta é a frase com a ";

//c)       Exibir a seguinte string de múltiplas linhas:

//Esta é a frase com a palavra1.

console.log(frase1 + palavra1);

//Esta é a frase com a palavra2.

console.log(frase2 + palavra2);

//Esta é a frase com a palavra3.

console.log(frase3 + palavra3);


//3)      Dado o array

let vetor = ["a", "b", "a", "a", "c", "d"]

//a)       Criar uma variável com o array ordenado de forma crescente;

let vetor_ordenado = vetor.sort();

//b)      Exibir no console.

console.log(vetor_ordenado);

//c)       Criar uma variável com o array ordenado de forma inversa.

let vetor_ordenado_rev = vetor_ordenado.reverse();

//d)      Exibir no console

console.log(vetor_ordenado_rev);