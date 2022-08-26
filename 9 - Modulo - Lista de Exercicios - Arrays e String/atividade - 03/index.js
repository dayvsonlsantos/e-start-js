//1)      Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:

let texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";

//a)       O número de caracteres da string.

console.log(texto.length)

//b)      A string com todas suas letras em maiúsculo.

console.log(texto.toUpperCase());

//c)       O número de vogais da string.

let quantVogais = 0;

for (let i = 0; i < texto.length; i++){
    let caracter = texto.charAt(i);
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
        quantVogais++
    }
}

console.log(quantVogais)

//d)      A string com todas suas letras em minúsculo.

console.log(texto.toLowerCase());

//e)      Fazer a busca pela palavra humanidade e exibir o index onde ela está.

console.log(texto.indexOf("humanidade"))


//2)      Percorrer os números pares menores que 100.

let numeros = []

//a)       Adicionar em um array.

for (let i = 0; i < 100; i++ ){
    if (i%2 == 0){
        numeros.push(i)
    }
}

//b)      Transformar o array em string.

//c)       Exibir no console.

console.log(numeros.toString().replaceAll(",", " - "));