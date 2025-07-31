/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("___Esercizio_1___");

function area(l1, l2) {
  let resu = l1 * l2;
  return resu;
}

console.log(area(7, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("");
console.log("___Esercizio_2___");

function crazySum(n1, n2) {
  let somm = n1 + n2;
  if (n1 !== n2) {
    return somm;
  } else {
    return somm * 3;
  }
}
const crazySum_out = crazySum(34, 45);
console.log(crazySum_out);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("");
console.log("___Esercizio_3___");

function crazyDiff(n1) {
  if (n1 < 19) {
    return n1 - 19;
  } else {
    return (n1 - 19) * 3;
  }
}
const crazyDiff_out = crazyDiff(45);
console.log(crazyDiff_out);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("");
console.log("___Esercizio_4___");

function boundary(n1) {
  return (n1 > 19 && n1 < 101) || n1 === 400;
}
const boundary_out = boundary(20);
console.log(boundary_out);

if (boundary_out === true) {
  console.log("Numero inserito e' tra 20 e 100 (incluso), o uguale a 400");
} else {
  console.log("Numero sbagliato");
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("");
console.log("___Esercizio_5___");

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}
const epify_out = epify("EPICODe");
console.log(epify_out);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("");
console.log("___Esercizio_6___");

function check3and7(n1) {
  if (n1 <= 0) {
    return "Inserisci solo i numeri positivi";
  } else if (n1 % 3 !== 0 || n1 % 7 !== 0) {
    return "Il numero non e' multiplo ne di 3 ne di 7";
  } else {
    return "E' divisibile";
  }
}

//   if (n1 <= 0) {
//     return "inserisci solo numeri positivi.";
//   }
//   return n1 % 3 === 0 || n1 % 7 === 0;
// }

const check3and7_out = check3and7(3);
console.log(check3and7_out);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("");
console.log("___Esercizio_7___");

function reverseString(str) {
  return str.split("").reverse().join("");
}

const reverseString_out = reverseString("ELICOTTERO");
console.log(reverseString_out);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("");
console.log("___Esercizio_8___");

function upperFirst(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const upperFirst_out = upperFirst("Epicode Esercizzi Difficcili");
console.log(upperFirst_out);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("");
console.log("___Esercizio_9___");

function cutString(str) {
  if (str.length <= 2) {
    return "";
  }
  return str.slice(1, -1);
}
const cutString_out = cutString("EPICODE");
console.log(cutString_out);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("");
console.log("___Esercizio_10___");

function giveMeRandom(n1) {
    let RandomNumArray = [];
    for (x = 0; x < n1; x++) {
        let RandomNum = Math.floor(Math.random() * 10);
        RandomNumArray.push(RandomNum);
    }
    return RandomNumArray;
}
const giveMeRandom_out = giveMeRandom(10);
console.log(giveMeRandom_out);