function Suma(a, b){
    let r
    r= a + b

    return r;
}
function Resta(a, b){
    let r
    r= a-b

    return r;
}
const Multiplicar = (a, b) =>{
    let r
    r= a * b

    return r;
}
const Division = (a, b) =>{
    let r
    if(b!= 0){
        r=a/b
    
        return r;
    }
    else{
        console.log("tus papas son primos")
    }
}

module.exports = {Suma, Resta, Multiplicar, Division};