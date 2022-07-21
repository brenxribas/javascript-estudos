// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

//

let numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(numeros[1][2]);

let[,[,,seis]] = numeros;
console.log(seis);


// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJECT)
let pessoa = {
    nome: 'Luiz',
    sobrenome: 'Johnson',
    idade: 24,
    endereco: {
        rua: 'Av. Johnson',
        numero: 350
    }
};
const { nome, sobrenome} = pessoa;
console.log(nome, sobrenome);

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

const {...resto} = pessoa;
console.log(nome, resto);

