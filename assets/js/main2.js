/* 
Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/
/* 
function returnReverse(parola) {
    var parolaDivisa = parola.split("");
    var parolaRovescia = parolaDivisa.reverse("");
    var risultato = parolaRovescia.join("");
    return risultato
}

returnReverse("ciao")
console.log(returnReverse("ciao"));
 */
/* 
Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
//prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

/* var numbers = [1, 2, 3];
var letters = ["a", "b", "c"];

function fuseMe(numbers, letters) {
    newarray = []
    
    if (numbers.length == letters.length) {
        for (var i = 0; i < numbers.length; i++){
            var numbersEl = numbers[i];
            var lettersEl = letters[i];
            newarray.push(numbersEl);
            newarray.push(lettersEl);
        } return newarray
    } else {
        return "Le due liste non sono uguali"
    }
    
}

var newarray = fuseMe(numbers, letters);
console.log(newarray); */

/* 
Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri 
//(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/
var min = 1;
var max = 5;
var array = [1, 2, 3, 4, 5];

function createNewArray(array, min, max) {
    combinedArray = [];
    for (i = 0; i < array.length; i++){
        var arrayEl = array[i];
        console.log(array[i]);
        if (arrayEl > min && arrayEl < max) {
            combinedArray.push(arrayEl)
        } else {
            console.log("non ci siamo");
        }

    }
}
