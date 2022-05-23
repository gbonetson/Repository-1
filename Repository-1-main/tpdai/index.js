

// const {Suma, Resta, Multiplicar, Division} = require("./modules/matematica");
// const Alumno = require("./modules/Alumno");

// let string1 = "Mis papas";
// let string2 = " son primos";
// let stringInterpolado = `${string1+string2}`;

// console.log(string1+string2);
// console.log(stringInterpolado);
// //2
// let a =10
// let b = 0
// console.log(Suma(a, b));
// console.log(Resta(a, b));
// console.log(Multiplicar(a, b));
// console.log(Division(a, b));

// //3
// const Alumno1 = new Alumno("juan", "46211304");
// const Alumno2 = new Alumno("juana", "46211305");

// console.log(Alumno1);
// console.log(Alumno2);

// //4
// const fs = require('fs');

// function JoeMama(input, output){
//     fs.copyFile(input, output, (err) => {
//         if (err) throw err;
//         console.log('source.txt was copied to destination.txt');
//     });
// }
// JoeMama("text.txt", "joe.txt")
//5 y 6
const url = require("url");
const parsearURL = URL => {
    const URL_regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if (URL.match(URL_regex))
    {
        const objeto1 = url.parse(URL, true);
        console.log("Host: "+objeto1.host)
        console.log("pathname: "+objeto1.pathname)
        console.log("parametros: "+objeto1.params)
    }
    else
        console.error("URL Invalida")
}
URL="https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1789569/tp-node-01"
parsearURL(URL, true);
//7




