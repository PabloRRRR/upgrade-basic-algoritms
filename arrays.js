/*1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.*/

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
var avenger = avengers[0];
console.log(avenger);

/*1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

avengers.shift();
avengers.unshift("IRONMAN");
console.log(avengers);

/*1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);

//*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters.push("Lapiz Lopez"); /*-->añado a Lapiz Lopez para que el array quede como el del enunciado*/
/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters, rickAndMortyCharacters[0], rickAndMortyCharacters[4]);

/*1.6 Elimina el segundo elemento del array y muestra el array por consola.*/
rickAndMortyCharacters.push("Lapiz Lopez"); /*-->añado a Lapiz Lopez para que el array quede como el del enunciado*/
/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
