//1)      Criar uma função anônima que recebe duas notas de um aluno do ensino médio:

//a)       Calcular a média do aluno.

//b)      Se a média for maior ou igual a 7, retornar "Aprovado!";

//c)       Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";

//d)      Se a média for menor que 5, retornar "Reprovado!".

const resultadoMedia = (media) =>{
    if (media >= 7) {
        return "Aprovado!";
    }
    if (media >= 5 && media < 7) {
        return "Recuperação!";
    }
    if (media < 5) {
        return "Reprovado!";
    }
}

//e)      Chamar a função e exibir no console o resultado.

console.log(resultadoMedia(7))


//2)      Criar uma função anônima que calcula a tabuada de 3.

const tabuada3 = () =>{
    for(let i = 1; i <=10; i++){
        console.log("3 X " + i + " = " + i*3)
    }
}

//a)       Chamar a função e exibir no console o resultado.

tabuada3();


//3)      Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.

const MaiorIdade = (anoDeNasc) =>{
    if ((2022 - anoDeNasc) >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

//a)       Chamar a função e exibir no console o resultado.

console.log(MaiorIdade(2001))