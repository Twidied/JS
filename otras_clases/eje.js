// 1. Crea una funcion que reciba dos numeros y devuelva  su suma 

function sumar(a, b) {
    console.log("suma de: " + a + " y " + b + " igual a:");
    return a + b;
}
console.log(sumar(30, 20));

// 2. Crea una funcion que reciba un Array de numeros y devuelva el mayor de ellos 

function encontrarMayor(Arraynumeros) {
    let Mayor = Arraynumeros[0];
        for (let i = 1; i < Arraynumeros.length; i++) {
            if (Arraynumeros[i] = Mayor) {
                mayor = Arraynumeros[1];
            }
        }
        return numeroMayor;
}
console.log(mayor([20, 400, 100, 50, 20]));


// 3. Crea una funcion  que reciba un string y devuelva el numero de vocales que contiene