//1)      Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:

//a.       Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.

    let x = 5;
    let y = "5";
    let z = 2;

    //Valores e tipos

    console.log (x === y)

    //Tipos

    console.log (x == y)

    //Valores

    console.log(x === z)

//b.       Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.

    let a = 6;
    let b = "6";

    //Valores e tipos

    console.log (a !== b)

    //Valores

    console.log (a != b)

//c.       Dado que x = “7” e y = 7, valide se os valores são iguais.

    let c = "7";
    let d = 7;

    //Valores e tipos

    console.log (c === d)

    //Valores

    console.log (c == d)


//2)      Declare uma variável chamada nome.

//a)       Atribua a ela o valor “Fulano”.

let nome = "Fulano";

//b)      Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”.

console.log("Boa noite, "+nome+"!")

//3)      Considere x = x + y, dado que x = 10 e y = 5.

let h = 10;
let i = 5;

//a)       Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.

h += i;
console.log(h);

h = 10;
i = 5;

//b)      Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.

h *= i;
console.log(h);

h = 10;
i = 5;

//c)       Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.

h %= i;
console.log(h);

h = 10;
i = 5;

//d)      Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.

h /= i;
console.log(h);

h = 10;
i = 5;

//e)      Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.

h -= i;
console.log(h);

h = 10;
i = 5;