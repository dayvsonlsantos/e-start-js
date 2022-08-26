//1)      Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:

//a)       Ordenar os elementos do array na ordem invertida

function retornarEstados(){
    let estadosNorte = ["Acre", "Amazonas", "Pará"]
    console.log(estadosNorte.reverse())
}

retornarEstados()


//2)      Criar uma função que recebe duas strings:

//a)       Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().

//b)      Concatenar as duas strings e retornar o resultado.

function receberStrings(text1, text2){
    console.log(text1.toUpperCase() + " " + text2.toUpperCase())
}

//c)       Chamar a função e exibir no console o resultado.

receberStrings("Olá", "Mundo")


//3)      Criar uma função que retorne 17 vezes a palavra Repetição.

function repetir(){
    for(let i = 1; i<=17; i++){
        console.log("Repetição")
        i++
    }
}

//a)       Chamar a função e exibir no console o resultado.

repetir();