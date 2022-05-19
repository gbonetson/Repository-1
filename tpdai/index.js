const {Suma, Resta, Multiplicar, Division} = require("./modules/matematica");
const Alumno = require("./modules/Alumno");

let string1 = "Mis papas";
let string2 = " son primos";
let stringInterpolado = `${string1+string2}`;

console.log(string1+string2);
console.log(stringInterpolado);
//2
let a =10
let b = 0
console.log(Suma(a, b));
console.log(Resta(a, b));
console.log(Multiplicar(a, b));
console.log(Division(a, b));

//3
const Alumno1 = new Alumno("juan", "46211304");
const Alumno2 = new Alumno("juana", "46211305");

console.log(Alumno1);
console.log(Alumno2);

//4
const fs = require('fs');

function JoeMama(input, output){
    fs.copyFile(input, output, (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });
}
JoeMama("text.txt", "joe.txt")
