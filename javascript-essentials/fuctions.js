// DECLARAÇÃO DE FUNÇÃO (FUNCTION HOSTING)

falaOi();
function falaOi(){
    console.log('Hi!')
}

// FIRST-CLASS OBJECTS - FUNCION EXPRESSION
const souUmDado = function() {
    console.log('Sou o dadinho.');
};
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// ARROW FUNCTIONS
const funcaoArrow = () => {
    console.log('Sou um arrow function =>');
};
funcaoArrow();

// DENTRO DO OBJETO
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();