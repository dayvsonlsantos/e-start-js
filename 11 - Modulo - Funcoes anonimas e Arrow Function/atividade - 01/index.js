//1)      Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:

//a)       Transformar todos os elementos em letras maiúsculas.

const exibirCapitais = () =>{
    let capitais = ["Recife, Natal, Fortaleza, João Pessoa, Aracaju"]
    return capitais.toString().toUpperCase()
}

console.log(exibirCapitais());


//2)      Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.

const numeros = () =>{
    for(let i=101; i<450; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}

//a)       Chamar a função e exibir no console o retorno da função. 

numeros();

//3)      Criar uma função anônima que recebe quatro strings:
//a)       Concatenar as strings e retornar o resultado.

const stringsConcatenar = (text1, text2, text3, text4) =>{
    return text1 + text2 + text3 + text4;
}

//b)      Chamar a função e exibir no console o resultado.

console.log(stringsConcatenar("Eu ", "me chamo ", "Dayvson ", "Lima"))