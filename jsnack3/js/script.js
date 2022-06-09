// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// CREO COSTANTE PER FARE LA SOMMA DEI NUMERI IMMESSI DALL'UTENTE
let sum = 0;

// CON LOOP FOR CHIEDO PER 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO CHE ANDRO' POI A SOMMARE
for (i = 0; i < 10; i++) {
    sum += parseInt( prompt(`${i + 1}/10 - Inserisci un numero`) );
}

// STAMPO IN HTML LA SOMMA DEI NUMERI IMMESSI
document.querySelector('h1').innerHTML = `La somma dei numeri immessi è ${sum}`;