// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO A 4 CIFRE
let myString = prompt('Inserire un numero con 4 cifre');
console.log(myString);
// CREO VARIABILE PER LA SOMMA
let somma = 0;
// SCORRO LE SINGOLE CIFRE DEL NUMERO INSERITO DALL'UTENTE VARIABILE CREATA PER LA SOMMA
for (let i = 0; i < myString.length; i++) {
    const number = parseInt(myString[i]);
    // SOMMO LE SINGOLE CIFRE DEL NUMERO INSERITO DALL'UTENTE NELLA VARIABILE CREATA PER LA SOMMA
    somma += number;
}

// STAMPO IN CONSOLE LA SOMMA
console.log(somma);