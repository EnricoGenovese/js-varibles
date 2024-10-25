const city = "New York"; // NON MODIFICARE QUESTA RIGA
const cityName = "City"; // NON MODIFICARE QUESTA RIGA
const shoppingList = "mele, banane, arance, uva"; // NON MODIFICARE QUESTA RIGA
const hello = "hello"; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = cityName.indexOf("y") + 1; // array value starts at 0; char 'y' is in position 3
console.log(cityIndex); // Output: 4

// 2. Sottostringhe
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.slice(4);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.replace(citySubstring, "Delhi");
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toLocaleUpperCase();
console.log(upperCaseHello); // Output: "HELLO"