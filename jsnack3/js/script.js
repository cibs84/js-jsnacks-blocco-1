// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// CREO UNA COSTANTE PER FARE LA SOMMA DEI NUMERI IMMESSI DALL'UTENTE
let sum = 0;

// PER 10 VOLTE
for (i = 0; i < 10; i++) {
    // CHIEDO DI INSERIRE UN NUMERO
    const userName = parseInt( prompt(`${i + 1}/10 - Inserisci un numero`) );
    
    // OGNI NUMERO LO AGGIUNGO ALLA SOMMA PRECEDENTE
    sum += userName;
}

// STAMPO IN HTML LA SOMMA DEI NUMERI IMMESSI
document.querySelector('h1').innerHTML = `La somma dei numeri immessi è ${sum}`;