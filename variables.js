//Variables 
//Var (Evitar usarla)
//Scope ->
var name = "Diego";

console.log(name);


function Diego() {
    var age = 15;
    console.log(age)

}

//permite re declarar la variable 
var age = 19;
Diego();
console.log(age);

//age: No existe
//hoisting


//let
//console.log(sexo); //Error

let sexo = "Masculino";
//Scope : Bloque 
function mostrarGenero() {
    console.log(sexo);
    let gender = sexo;
}
//No permite redefinir 
//let sexo "otro";
sexo = "Uno Nuevo";
console.log(sexo);

mostrarGenero();
//console.log(gender);

//cost
const ROL_USUARIO = "user";
const OTRA = "otro valor";

// ROL_USUARIO = "Otro"; //Error

//Nomenclatura y Convenciones
let camelCase = 1;
let nombreUsuario = "Diego";
let rolusuarioPlataforma = "Programador";

let snake_case = 1;
let nombre_usuario = "Diego";
let rol_usuario_plataforma = "programador";

const SCREAMING_CASE = 1;
const NOMBRE_USUARIO = "Diego";
const ROL_USUARIO_PLATAFORMA = "programador";

//Tipos de datos primitivos
//number
let numero = 0/0;
console.log(typeof numero);

//string 
let texto = "a1"+1;
console.log(typeof texto);

//boolean
let esMayorQueYo = false;
console.log(typeof esMayorQueYo);
//null
let tarjetasDeCredito = null;
console.log(typeof tarjetasDeCredito);

//undefined
let elNoCaermeDeLaMoto;
console.log(elNoCaermeDeLaMoto)

//Tipos de datos complejos o de referencia
//Object

//
let informacion = {
    nombre: "E",
    edad: 19,
    caidas: 1,
    perros: [
        {
            nombre: "luna",
            genero: "Macha"
        }
    ],
    mordidas: true,

};
console.log(typeof informacion);

//Arrays
let caidas = [
    {
        fecha: '2025-08-10',
        demages: 'mental'
    },
    {
        vehiculo: 'motocicleta'
    },
    true,
    'otros valores',
    [1,2,3,4,5,6,7,8,9]
];

console.log(typeof caidas);

//Conversiones

//ToString
let esMayor = true;
let edadDeMayor = 18;
console.log(typeof esMayor);
console.log(typeof edadDeMayor);

esMayor = String(esMayor);
console.log(typeof esMayor);
edadDeMayor = String(edadDeMayor);
console.log(typeof edadDeMayor)

let baloto = "4114242421";
console.log(typeof baloto);
baloto = Number( "4114242421");
console.log(typeof baloto);
// Interpolacion de variables
let mensajes = 'Hola, mi nombre es '+nombreUsuario+ ' y yo gane con el baloto N ' +baloto + ' y mi edad es '+ edadDeMayor;

let mensajeTop = `Hola, mi nombre es ${nombreUsuario} y yo gane con el baloto N ${baloto} y mi edad es ${edadDeMayor}`;

console.log(mensajes);
console.log(mensajeTop);