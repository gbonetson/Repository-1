    //años bisiestos entre 2022 y 2150
    //divisible por 4 o por 100 o por 400
    function ej1(){
        let bisiestos = []
        for(let i=2020; i<2150; i++){
            if(i%4==0 || (i%100==0 && i%400==0)){
                bisiestos.push(i)
            }
        }
        return bisiestos;
    }
    console.log(ej1())

    //cuantas cartas con numero par y negras hay en un mazo
    //eliminar 6 cartas de la baraja al azar y calcular en promedio (haciendo 1000 iteraciones) cuanto valen las cartas (con numero) que quedan