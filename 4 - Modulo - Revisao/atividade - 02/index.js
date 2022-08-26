//1)      Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.



//a)       Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”.

//b)      Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.

//c)       Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

function comprarVeiculos(modelo) {
    switch (modelo) {
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedans":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        case "motocicletas":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        case "caminhonetes":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }
}

let respostaUser = prompt("Informe o modelo desejado: \n hatch, sedans, motocicletas, caminhonetes")

comprarVeiculos(respostaUser);


//2)      Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:

//a)       Se todos os lados são iguais, o triângulo será equilátero;

//b)      Se todos os lados forem diferentes, será escaleno;

//c)       Se nenhuma das duas condições anteriores for atendida, será isósceles.

function definirTriangulo (ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo Equilátero")
    } else {
        if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
            console.log("Triângulo Escaleno")
        } else {
            console.log("Triângulo Isósceles")
        }
    }
}

let medida1 = prompt("Informe o 1º lado do triângulo: ")
let medida2 = prompt("Informe o 2º lado do triângulo: ")
let medida3 = prompt("Informe o 3º lado do triângulo: ")

definirTriangulo(medida1, medida2, medida3)

//3)      Construa uma função que receba um número.

//a)       Se o número for  positivo, mostrar a informação de que ele é positivo.
//b)       Se o número for negativo, mostrar a informação de que ele é negativo.

function positivoNegativo(num) {
    if (num < 0) {
        console.log("O número " + num + ", é um número negativo");
    } else {
        console.log("O número " + num + ", é um número positivo");
    }
}

let num = prompt("Informe um número inteiro: ")

positivoNegativo(num);