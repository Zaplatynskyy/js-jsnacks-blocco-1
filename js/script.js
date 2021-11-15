// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// // versione ciclo for
// let sum = 0;

// for(let i = 0; i < 5; i++) {
//     const num = parseInt(prompt('Inserisci un numero'));
//     sum += num; 
// }

// console.log('La somma dei numeri inseriti è', sum);

// // versione ciclo while
// let sum = 0;
// let i = 0;

// while(i < 5) {
//     const num = parseInt(prompt('Inserisci un numero'));
//     sum += num; 

//     i++;
// }

// console.log('La somma dei numeri inseriti è', sum);


// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parolaUno = prompt('Inserisci la prima parola');
const parolaDue = prompt('Inserisci la seconda parola');

if(parolaUno.length < parolaDue.length) {
    console.log('La parola più lunga è', parolaDue);
} else if(parolaUno.length > parolaDue.length) {
    console.log('La parola più lunga è', parolaUno);
} else {
    console.log('Le parole inserite (', parolaUno,'e', parolaDue, ') hanno la stessa lunghezza');
}



// JSnack 3
// Stampa le potenze di 2 fino a 1000.