function random(min = 0, max = 3) {
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

// esperaAi('Fase 1', random())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', random());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', random());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     }).then(fase => {
//         console.log('Terminamos na fase: ', fase);
//     })
//     .catch(e => console.log('Error:', e));

// await - espera uma promise ser finalizada.
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', random());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', random());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', random());
        console.log(fase3);
        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();

// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada