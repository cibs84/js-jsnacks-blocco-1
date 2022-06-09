// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// CREO ARRAY
const numbers = [3, 6, 93, 67, 89, 24, 68, 71, 68];
let numbersOdd = [];
let numbersEven = [];

// SCORRO I NUMERI E VERIFICO CON % I MULTIPLI DI 2
for (let i = 0; i < numbers.length; i++) {
    let thisNumber = numbers[i];
    // SE IL NUMERO E' MULTIPLO DI 2 LO INSERISCO NELL'ARRAY numbersEven
    if (thisNumber % 2 === 0) {
        numbersEven.push(thisNumber);
    // ALTRIMENTI IL NUMERO VERRA' INSERITO NELL'ARRAY numbersOdd
    } else {
        numbersOdd.push(thisNumber);
    }
}

// SELETTORI ELEMENTI HTML DOVE STAMPARE I DUE ARRAY PARI/DISPARI
const evenElement = document.getElementById('even');
const oddElement = document.getElementById('odd');

// STAMPO IN HTML I DUE ARRAAY PARI/DISPARI
evenElement.innerHTML = numbersEven;
oddElement.innerHTML = numbersOdd;