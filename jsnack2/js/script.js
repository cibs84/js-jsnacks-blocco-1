// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO A 4 CIFRE
let userNumber = prompt('Inserire un numero con 4 cifre');

// CREO VARIABILE PER LA SOMMA
let sum = 0;

// SCORRO LE SINGOLE CIFRE DEL NUMERO INSERITO DALL'UTENTE
for (let i = 0; i < userNumber.length; i++) {
    const thisNumber = parseInt(userNumber[i]);
    
    // SOMMO LE SINGOLE CIFRE DEL NUMERO INSERITO DALL'UTENTE
    sum += thisNumber;
}

// STAMPO IN CONSOLE LA SOMMA
console.log(sum);