// MAP = mantém o mesmo tamanho do array.

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorno apenas uma string com o nome da pessoa;
// Remova apenas a chave "nome" do objeto.
// Adicione uma chave id em cada objeto.

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
// const idades = pessoas.map(obj => obj.idade);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map(function (obj, indice) {
    // obj.id = (indice + 1) * 1000;
    // return obj;
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(pessoas);
console.log(comIds);
