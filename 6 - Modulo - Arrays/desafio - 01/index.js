//Usando métodos de array, você transformará um array de strings em uma mensagem secreta! Você deve consultar o Mozilla Developer Network MDN para obter referência sobre qualquer método com o qual você não esteja familiarizado ou revise os PDFs sobre Arrays que foram aplicados na aula.

//Abaixo está o array que será utilizado nesse exercício:

const mensagemSecreta = [
    'Aprender',
    'não',
    'é',
    'o',
    'sobre',
    'que',
    'você',
    'consegue',
    'facilmente',
    'na',
    'primeira',
    'vez',
    'mas',
    'sobre',
    'o',
    'que',
    'você',
    'pode',
    'descobrir',
    '- 2015',
    'Chris',
    'Pine',
    'Aprenda',
    'JavaScript'
];

//Dicas:

//- Use um método de Array para remover o último valor do Array mensagemSecreta.

mensagemSecreta.pop();

    //- Você pode ler a documentação .pop() no MDN. 

//- Confira se o valor foi realmente removido do Array (você pode usar o console.log ) 

console.log(mensagemSecreta)

//- Adicione no final do Array mensagemSecreta as palavras a e programar (não esqueça de conferir se as palavras foram adicionadas corretamente ) 

mensagemSecreta.push("a");
mensagemSecreta.push("programar");

//- Altere a palavra facilmente para a palavra certo

mensagemSecreta.splice(8, 1, "certo")
console.log(mensagemSecreta)

    //- Você pode usar o método splice() ou mudar o valor do index do array que contém o valor facilmente para conter o valor certo.

//- Use um método de Array para remover o primeiro valor do Array.

mensagemSecreta.shift();

//- Use um método de Array para adicionar a palavra Programação no início do Array.

mensagemSecreta.unshift("Programação");

//- Use um método de Array para remover os valores: 'consegue', 'certo', 'na', 'primeira', 'vez,' , e substituí-los pela palavra sabe.

mensagemSecreta.splice(7, 5, "sabe")

//- Transforme todo o valor do Array em uma única string. Use o método join().
console.log(mensagemSecreta.join(" "))

mensagemSecreta.splice(7, 2, "sabe,", "é")
mensagemSecreta.splice(3, 1, "sobre");
mensagemSecreta.splice(4, 1, "o");
mensagemSecreta.splice(17, 1, "Pine,");
mensagemSecreta.splice(15, 1, "- 2015,");
mensagemSecreta.splice(14, 1, "descobrir.");
mensagemSecreta.splice(20, 1, "programar.");
console.log(mensagemSecreta.join(" "))

//- Final da Mensagem Secreta: Programação não é sobre o que você sabe, é sobre o que você pode descobrir. -2015, Chris Pine, Aprenda a programar.