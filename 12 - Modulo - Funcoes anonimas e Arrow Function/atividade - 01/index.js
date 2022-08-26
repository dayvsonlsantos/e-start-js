//1)      Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.

const multiplicarValores = (num1, num2) => {
    return parseInt(num1 * num2);
}

//a)       Chamar a função e exibir o resultado no console.

console.log(multiplicarValores(2, 4))


//2)      Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.

const maiorNumero = (num1, num2, num3) =>{
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    }
}

//a)       Chamar a função e exibir o resultado no console.

console.log(maiorNumero(95, 164, 14));

//3)      Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.

const parImpar = (num) =>{
    if (num%2 == 0){
        return "par"
    }else{
        return "impar"
    }
}

//a)       Chamar a função e exibir no console o resultado.

console.log(parImpar(2))