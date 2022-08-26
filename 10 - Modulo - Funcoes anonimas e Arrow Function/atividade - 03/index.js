//1)      Criar uma função para receber  uma string como parâmetro:

//a)       Contar a quantidade de palavras repetidas em uma frase e retornar o total.

function repeticoes(text){
    let cont = 0;
    let arrayText = text.split(" ");
    for(let i = 0; i < arrayText.length -1; i++){
        if(arrayText[i] === arrayText[arrayText.length - i]){
            cont++
        }
    }
    cont++
    return cont;
}

//b)      Chamar a função e exibir o resultado no console.

console.log(repeticoes("Olá, vamos testar testar testar testar testar as repetições"))


//2)      Criar uma função que receba um array com 5 números como parâmetros:

//a)       Inverter o array e retornar o resultado.

function inverterArray(numeros){
    console.log(numeros.sort().reverse())
}

//b)      Chamar a função e exibir o resultado no console.

inverterArray([8, -5, 0, 9, 1])


//3)      Criar uma função que receba 4 números inteiros positivos como parâmetros:

//a)       Calcular a soma de todos os números.

//b)      Retornar o Resultado.

function somar(num1, num2, num3, num4){
    let resultado = parseInt(num1 + num2 + num3 + num4);
    return resultado;
}

//c)       Chamar a função e exibir o resultado no console.

console.log(somar(10, 12, 15, 8));