//1)      Criar 3 variáveis com tipos Objeto Number para guardar os valores:

//a)       300, 999 e 21.

    let num1 = 300;
    let num2 = 999;
    let num3 = 21;

//b)      Exibir no console os valores das variáveis.

    console.log("Valor 1: "+ num1 + "\n" + "Valor 2: " + num2 + "\n" + "Valor 3: " + num3);


//2)      Exibir no console os valores de 4 propriedades do tipo objeto Number.

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);

let num = 255;

console.log(Number.EPSILON);
console.log(num > Number.EPSILON);


//3)      Criar 1 variável para receber o valor 150, em seguida faça:

let valor = 150;

//a)       Exibir no console o valor da variável.

    console.log("Valor: " + valor);

//b)      Converter para string o valor.

    let valorString = valor.toString();

//c)       Exibir no console, o valor convertido.

    console.log("Valor em String: "+ valorString)