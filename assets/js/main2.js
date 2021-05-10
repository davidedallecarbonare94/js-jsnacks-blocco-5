/* 
Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

function returnReverse(parola) {
    var parolaDivisa = parola.split("");
    var parolaRovescia = parolaDivisa.reverse("");
    var risultato = parolaRovescia.join("");
    return risultato
}

returnReverse("ciao")
console.log(returnReverse("ciao"));

/* 

*/