// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

let sum = 0;

for(let i = 0; i < 5; i++) {
    const num = parseInt(prompt('Inserisci un numero'));
    sum += num; 
}

console.log('La somma dei numeri inseriti è', sum);


// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// JSnack 3
// Stampa le potenze di 2 fino a 1000.