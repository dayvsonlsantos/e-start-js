//1)      Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:

let aprovados = [
    { candidato: "Renata Soares", nota: 7.8, idade: 29 },
    { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
    { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
    { candidato: "João Oliveira", nota: 7.8, idade: 27 },
    { candidato: "Adriana Telles", nota: 7.8, idade: 28 }
];

const retornarAprovados = () =>{
    let array = []
    for(let i = 0; i < aprovados.length; i++){
        if(aprovados[i].idade >= 28 && aprovados[i].idade <=30){
            array.push(aprovados[i])
        }
    }
    return array;
}

//a)       Chamar a função e exibir o resultado no console.

console.log(retornarAprovados())


//2)      Criar um função anônima que recebe uma string como parâmetro:

//a)       Repetir o valor do parâmetro 37 vezes.

//b)      Retornar o Resultado.

const repetirParametro = (text) => {
    for (let i = 0; i < 37; i++) {
        console.log(text + " " + i);
    }
}

//c)       Chamar a função e exibir o resultado no console.

repetirParametro("Oie sou uma string");