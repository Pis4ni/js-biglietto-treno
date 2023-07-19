/* immagazzino il costo/km */
const costKm = 0.21

/* immagazzino il valore della maggiore età */
const adult = 18

/* immagazzino il valore dell' età pensionabile */
const retairee = 65

/* immagazzino il valore dello sconto per minore età */
const discountMinor = 20 
/* immagazzino il valore dello sconto per maggiore età */
const discountMajor = 40 
/* chiedo all' utente quanti chilometri ha intenzione di percorrere */
const userDistance = prompt("Please enter your distance", "45")
/* chiedo all' utente la sua età */
const userAge = prompt("Please enter your age", "45")
/* calcolo il prezzo esclusivamente sulla base della distanza/prezzo */
let partial = costKm * userDistance
/* immagazzino il valore del prezzo parziale */
let lastPrice 
/* immagazzino il valore dello sconto da sottrarre al prezzo parziale */
let discountValue
/* SE l' età del richiedente è inferiore alla maggiore età */
if (userAge > adult) {
    /* applico uno sconto del 20% sul prezzo totale del bilietto */
    discountValue = ( partial*discountMinor)/100
    lastPrice = partial - discountValue
    /* ALTRIMENTI SE l' età è compresa tra la maggiore e l' età pensionabile non applico nessuno sconto */
} else if (adult<userAge>retairee){
    lastPrice = partial
    /* ALTRIMENTI applico uno sconto pari al 40% */
} else {
    discountValue = ( partial*discountMajor)/100
    lastPrice = partial - discountValue
}
/* fine. */
console.log(lastPrice) 

document.getElementById('display').innerHTML = "il prezzo finale del tuo biglietto è " + lastPrice +"€" + " al quale è stato applicato uno sconto di: " + discountValue +"%"+ " Goditi il tuo viaggio!"


