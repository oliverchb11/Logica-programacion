function calcularDiagonales (numero1){
    let nuevoArray = new Array(numero1);
    for(let i = 0; i < numero1 ; i++){
      let arr =  nuevoArray[i] = new Array(numero1);
    }
    let acomulador = 1;
    for(let fila = 0;fila < numero1;fila++){
        for(let col = 0; col < numero1; col++){
            nuevoArray[fila][col] = acomulador;
            acomulador += 1; 
        }
    }
    let suma = 0;
    let suma1 = 0;
    for(let fila = 0;fila < numero1;fila++){
         for(let col = 0; col < numero1; col++){
            document.write(nuevoArray[fila][col] + '&emsp;');
            //diagonal primaria
            if(fila==col){
                let sumadp =  nuevoArray[fila][col];
                suma = suma + sumadp;
                }else{}
            //diagonal secundaria
            if(fila+col==numero1-1){
                let sumads =  nuevoArray[fila][col];
                suma1 = suma1 + sumads;
                
            }else{}
        }
            document.write('<br/>');
    }
    document.write(`La suma de la diagonal principal es:${suma}<br/>`);
    document.write(`La suma de la diagonal secundaria es:${suma1}<br/>`);
    let valorAbsoluto = suma - suma1;
    document.write(`El valor absoluto de la diferencia de las diagonales |${suma}-${suma1}| es: ${valorAbsoluto}`);
}
let valor = prompt("Ingresa el numero de cuanto por cuanto sea la matris ej: 4 o 3 o 2");
calcularDiagonales(valor);