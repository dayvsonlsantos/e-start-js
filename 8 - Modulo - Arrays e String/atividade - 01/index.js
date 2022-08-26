//1)      Dada as strings abaixo: dominio1 e dominio2.

//a)       dominio1 = "mundojs"

let dominio1 = "mundojs"

//b)      dominio2 = "google"

let dominio2 = "google"

//c)       Concatenar as strings para exibir a mensagem: Olá mundojs! O site www.google.com te ajuda a achar muitos materiais de estudo.

console.log("Olá "+ dominio1 +"! O site www."+ dominio2 +".com te ajuda a achar muitos materiais de estudo.")


//2)      Dada as strings: valorA e valor B.

//a)       valorA = "casa"

let valorA = "casa";

//b)      valorB = "asa"

let valorB = "asa";

//c)       Transformar todas as letras em maiúsculas usando toUpperCase().

valorA = valorA.toUpperCase();
valorB = valorB.toUpperCase();

//d)      Exibir no console.

console.log(valorA + " " + valorB);

//e)      Comparar se a string valorB tem todos os caracteres contidos na string valorB.

//f)        Exibir no console.

console.log(valorA === valorB);

//3)      Dada a string valorA = "substring(): Aprenda a utilizar.", utilizando o método substring, exibir no console: Aprenda a utilizar.

valorA = "substring(): Aprenda a utilizar.";
valorA = valorA.substring(13,valorA.length);
console.log(valorA);