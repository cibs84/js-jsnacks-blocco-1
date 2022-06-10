// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// CREO ARRAY
const numbers = [3, 6, 93, 67, 89, 24, 68, 71, 68];

// SCORRO I NUMERI E VERIFICO CON % I MULTIPLI DI 2
for (let i = 0; i < numbers.length; i++) {
    let thisNumber = numbers[i];
    // SE IL NUMERO E' PARI SARA' STAMPATO NELL'ELEMENTO HTML CON ID 'even'
    let divId;
    if (thisNumber % 2 === 0) {
        divId = 'even';
    // ALTRIMENTI IL NUMERO SARA' STAMPATO NELL'ELEMENTO HTML CON ID 'odd'
    } else {
        divId = 'odd';
    }

    document.getElementById(divId).innerHTML += thisNumber;
}
