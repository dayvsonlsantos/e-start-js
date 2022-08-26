//Criar um arquivo javascript para:

//a) Exibir no console a posição da letra h na string txt.

    let txt = "abcdefghijklm";
    console.log(txt.indexOf("h"))

//b) Exibir no console a palavra bananas, use o método slice.

    let txt2 = "Posso comer bananas o dia todo";
    console.log(txt2.split(" ").slice(2, 3).toString());

//c) Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.

    let txt3 = "Olá, mundo";
    console.log(txt3.replace("Olá", "Bem vindo"));

//d) Converter o texto em letras maiúsculas e exibir no console.

    console.log(txt3.toUpperCase());

//e) Converter o texto em letras minúsculas e exibir no console.

    console.log(txt3.toLowerCase());

//f) Exibir no console o tamanho da string.

    txt3 = "Posso comer bananas o dia todo";
    console.log(txt.length);

//g) Concatenar as strings e exibir no console.

let txt4 = "Hello ";
let txt5 = "World!";
console.log(txt4 + txt5);

//h) Ordenar o array de frutas em ordem alfabética e exibir no console

let fruits = ["Banana", "Orange", "Apple", "Kiwi"]

console.log(fruits.sort())

fruits = ["Banana", "Orange", "Apple", "Kiwi"]

//i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.

fruits.shift();
fruits.pop();
console.log(fruits)

//j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.

fruits.push("Uva", "Caju", "Kiwi");
console.log(fruits)

//k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.

fruits.unshift("Pera", "Manga")
fruits.pop();
console.log(fruits)