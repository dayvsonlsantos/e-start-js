//1)      Criar uma função para receber dois parâmetros: numero e percentual.
//a)       Calcular a porcentagem de um número  usando a fórmula: (numero/100) * percentual

function calcular(num, percentual){
    let porcentagem = (num/100) * percentual;
    console.log(porcentagem)
}

//b)       Chamar a função e exibir o resultado no console.

calcular(50, 12)

//2)      Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:

//a)       Converter o array para string e retornar o resultado.

function converterArray(arr1, arr2){
    let juntarArrays = arr1.concat(arr2).toString().replaceAll(",", " ");
    return juntarArrays;
}

//b)      Chamar a função e exibir o resultado no console.

console.log(converterArray(["Dayvson"], ["Lima"]))