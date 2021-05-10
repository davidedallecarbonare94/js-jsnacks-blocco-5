/* 
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, 
//peso e lunghezza.
var zucchine = [
    {
        varietà: "Zucchino nero",
        peso: 150,
        lunghezza: 120,
    },
    {
        varietà: "Zucchino romanesco",
        peso: 180,
        lunghezza: 110,
    },
    {
        varietà: "Zucchino ortolano di Faenza",
        peso: 160,
        lunghezza: 140,
    },
    {
        varietà: "Zucchina lunga fiorentina",
        peso: 130,
        lunghezza: 100,
    },
    {
        varietà: "Zucchino siciliano",
        peso: 190,
        lunghezza: 120,
    },
    {
        varietà: "Zucchina striata di Napoli",
        peso: 135,
        lunghezza: 125,
    },
    {
        varietà: "Zucchina bianca triestina",
        peso: 165,
        lunghezza: 105,
    },{
        varietà: "Zucchina rigata pugliese",
        peso: 175,
        lunghezza: 180,
    },{
        varietà: "Zucchino tondo di Piacenza",
        peso: 200,
        lunghezza: 100,
    },{
        varietà: "Zucchino tondo di Nizza",
        peso: 180,
        lunghezza: 145,
    },
]
console.log(zucchine);

//Calcola quanto pesano tutte le zucchine

var zucchineEl;
var pesoZucchine;

for (var key in zucchine) {
    for (var i = 0; i < zucchine.length; i++){
        zucchineEl = zucchine[key]
    }
    console.log(zucchineEl.peso);

    for (var j = 0; j < zucchineEl.peso; j++) {
        pesoZucchine += zucchineEl.peso[j];
    }
}
console.log(pesoZucchine);




