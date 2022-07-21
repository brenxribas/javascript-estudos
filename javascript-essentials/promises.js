function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg != 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise!');
            return;
        }, tempo);
    });
}

// esperaAi('Frase 1', random(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 2', random(1, 3));
//     }).then(resposta => {
//         console.log(resposta);
//         return esperaAi(2222, random(1, 3));
//     }).then(resposta => {
//         console.log(resposta);
//     }).catch(e => {
//         console.log('ERRO:', e);
//     });

// console.log('Isto será exibido primeiro.');


const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', random(1, 5)),
    esperaAi('Promise 2', random(1, 5)),
    esperaAi('Promise 3', random(1, 5)),
    esperaAi(1000, random(1, 5)),
    // 'Outro valor'
];

// Promise.all - tenta resolver todas
// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });

// Promise.race - resolve a mais rápida
// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });

//Promise.resolve
// function baixaPagina(){
//     const emCache = true;
//     if(emCache) {
//         return Promise.resolve('Pagina em cache');
//     }else{
//         return esperaAi('Baixei a página', 3000);
//     }
// }

//Promise.reject
function baixaPagina(){
    const emCache = true;
    if(emCache) {
        return Promise.reject('Pagina em cache');
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO:', e));

