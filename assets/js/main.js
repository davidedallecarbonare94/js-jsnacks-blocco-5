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
var pesoZucchine = 0;

for (var key in zucchine) {
    zucchineEl = zucchine[key];
    console.log(zucchineEl.peso);
    pesoZucchine += zucchineEl.peso  
}
console.log("Il peso totale delle zucchine è: ", + pesoZucchine);

/* 
Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/
var zucchineDaOrto = [
    {
        varietà: "Zucchino nero",
        peso: 150,
        lunghezza: 155,
    },
    {
        varietà: "Zucchino romanesco",
        peso: 180,
        lunghezza: 110,
    },
    {
        varietà: "Zucchino ortolano di Faenza",
        peso: 160,
        lunghezza: 185,
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
        lunghezza: 190,
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

var zucchineDaOrtoElemento;

for (var chiave in zucchineDaOrto) {
    zucchineElemento = zucchineDaOrto[chiave];
    console.log(zucchineElemento.lunghezza);
}

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchinePiccole = [];
var zucchineGrandi = []
for (var j = 0; j < zucchineDaOrto.length; j++){
    zucchineDaOrtoElemento = zucchineDaOrto[j];
    if (zucchineDaOrtoElemento.lunghezza <= 150) {
        zucchinePiccole.push(zucchineDaOrtoElemento)
    } else {
        zucchineGrandi.push(zucchineDaOrtoElemento)
    }

}
console.log(zucchinePiccole);
console.log(zucchineGrandi);

