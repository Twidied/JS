function sumar(a, b) {
    console.log("Hola desde suma");
    return a + b
};

//let resultado = sumar(5, 90);
//console.log(resultado);
/**
 
función para decodifucar los conjuros del codice de hechiceria
@param {string} simbolos */
function decodeSpell(simbolos) {
    let equivalencias = new Map();
    equivalencias.set("☽", 1);
    equivalencias.set("☾", 5);
    equivalencias.set("♁", 10);
    equivalencias.set("⚕", 50);
    equivalencias.set("⚡", 100);
    let resultado = 0;

    for (let i = 0; i < simbolos.length; i++) {
        let simbolo = simbolos[i]
        let valor = equivalencias.get(simbolo)
        let valorProximo = equivalencias.get(simbolos[i + 1]);
        if (valor === undefined) {
            // Corrupto
            return NaN;
        }
        if (valor < valorProximo) {
            valor = valor - 1;
        }
        resultado += valor;
    }

    return resultado;
}

console.log(decodeSpell('☽☽☽')) // 3
console.log(decodeSpell('☽☾'))// 4 (5 - 1)
console.log(decodeSpell('☾☽'))// 6 (5 + 1)
console.log(decodeSpell('☾☽☽☽')) // 8 (5 + 3)
console.log(decodeSpell('☽☽☽⚡')) // 101 (1 + 1 + (100 - 1))
console.log(decodeSpell('☽⚕'))// 49 (50 - 1)
console.log(decodeSpell('☽☽☾')) // 5 (1 + (5 - 1))
console.log(decodeSpell('☽☽☾⚡')) // 95 (1 + (-1 + (100 - 5)))
console.log(decodeSpell('☽⚕⚡')) // 49 (-1 - 50 + 100)
console.log(decodeSpell('⚡⚡⚡')) // 300
console.log(decodeSpell('⚕⚡'))// 50
console.log(decodeSpell('⚕.♒')) // NaN


//Set -> Evita elementos duplicados las ordena...
// const numeros = new Set ([1,5,2,3,2]); // -> 2
//numeros.size
//numeros.has(xelemento) -> true / false
//numeros.delete(xelemento) -> true / false
//numeros.addI(xelemento) -> Set
//numeros.clear()