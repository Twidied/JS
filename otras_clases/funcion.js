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

//PENDIENTE


let textos = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";

//substring()
let nuevaCadena = textos.substring(50, 100)
console.log(nuevaCadena);

let otraCadena = textos.slice(100)
console.log(otraCadena);

/**
 * Funcion para contar cadenas de texto
 * @param {string} cadena
 * @param {string} separador
 * @returns {Array} array de valores
 */
function contarNumeros(cadena, separador) {
    return cadena.split(separador)
}
function dividirTextos(cadena, separador) {
    return cadena.split(separador)
}

let numerosConComas = "1,2,3,4,5,6,7,8,9,10,11";

let valores = dividirTextos(numerosConComas, ",")
console.log(valores);
let totalPalabras = dividirTextos(textos, "")
console.log(`Total de palabras: ${totalPalabras. length}`)

let nick = "@Diego"
let validarNick = nick.startsWith("@")
let respuesta = validarNick ? "SI" : "NO"

console.log(`El nick del usuario es valido? ${respuesta}`);

let contiene500anos = textos.includes("500 años")
console.log(`Si contiene? ${contiene500anos ? "SI":"NO"}`);

//Funciones de expresion anonimas
const calcularEdad = function(edad) {
    return edad >= 18;
}

console.log(calcularEdad(16));

//Funcion de expresion nombradas
const factorial = function fact(n) {
    if(n <= 1) return 1;
    return n * fact( n - 1 ) 
}

console.log(factorial(5));

//Funciones tipo flecha

function xOperacion(a) {
    console.log (a);
    return a * a
}

const otraOperacionArrow = (a) => {
    console.log (a);
    return a * a
}
const lightOperacionArrow = a => a * a;
const sumarArrow = (a , b) => a + b;
console.log(sumarArrow(20 , 30));