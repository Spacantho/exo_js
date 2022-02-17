console.log("EXO 1 / Prendre une variables, affecter une valeur à cette variable et l'afficher")
let variable = 2
console.log(variable);

console.log("EXO 2 / Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables")
let a = 3
let b = 8

let resultplus = a + b
console.log(resultplus);
let resultless = a - b
console.log(resultless);
let resultper = a * b
console.log(resultper);

console.log("EXO 3 / Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher")
let string = "Orchidoclaste"
console.log(string);

console.log("EXO 4 / Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables")
let d = "coucou"
let e = "petite perruche"
console.log(d + " " + e);

console.log("EXO 5 / Permutter le contenu de la variable f et de la variable g")
let f = 2
let g = 5
let h = f
console.log("de base f = " + f + " et g = " + g);
console.log("f vaut maintenant " + (f = g));
console.log("g vaut maintenant " + (g = h));

console.log("EXO 6 / A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités")
let i = 30
let j = 20

if (i > j){
    console.log(i + " est plus grand que " + j);
  } else if (j > i){
    console.log(j + " est plus grand que " + i);
  } else {
    console.log("Les valeurs sont égales");
  }
  
console.log("EXO 7 / faire une fonction qui prend en parametres deux variables et qui définis quel chiffre est le plus grand")

function comparator(a, b) { 
var stringConsole = "";
        if (a > b){
            stringConsole = a + " est plus grand que " + b
        } else if (b > a){
            stringConsole = b +" est plus grand que " + a
        } else {
            stringConsole = "Les valeurs sont égales"
        }
        return stringConsole;
}
let k = 30
let l = 40
console.log(comparator(k,l));

console.log("EXO 8 / afficher un nombre aléatoire");

const min=1; 
const max=10000;  
var random = Math.floor(Math.random() * (max - min)) + min; 
console.log(random);

console.log("EXO 9 / afficher 10 nombre aléatoire en utilisant une boucle")
for( m=0; m<10; m++){
    let n = Math.floor(Math.random() * (max - min)) + min; 
    console.log(n) ;
  }

console.log("EXO 10 / afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90")
let o = 0
var mino=1; 
var maxo=100; 
while( o < 90){
    o = Math.floor(Math.random() * (maxo - mino)) + mino; 
    console.log(o)
  }
  