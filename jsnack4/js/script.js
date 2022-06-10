// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// CREO UN ARRAY DOVE INSERIRE I NUMERI DISPARI IMMESSI DALL'UTENTE
const oddNumbers = [];

// PER 6 VOLTE
for (i = 0; i < 6; i++) {
    // CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO
    const userNumber = parseInt( prompt(`${i + 1}/6 - Inserisci un numero`) );

    // SE IL NUMERO IMMESSO E' DISPARI ALLORA LO INSERISCO NELL'ARRAY PRECEDENTEMENTE CREATO 'oddNumbers'
    if (userNumber % 2 !== 0) {
        oddNumbers.push(userNumber);
    }
}

// STAMPO IN HTML I NUMERI DISPARI INSERITI DALL'UTENTE
document.querySelector('h1').innerHTML = `Questi sono tutti i numeri dispari inseriti: ${oddNumbers}`;