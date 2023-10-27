console.log('ejercicio 1');

// Descompocisión 
// Reconocimiento de patrones



// hacer una función que tome la fecha de nacimiento y calcule la edad





// crear la funcion
function calculateAge(dateOfBirth){
    // tomar la vaiable de fecha de nacimiento
    // obtener la fecha actual
    let today = new Date();
    // calcular los años . calculando la diferencia entre las dos fechas
    let age = (today - dateOfBirth)/(1000 *60*60*24*365);
    // devolver la edad
    return age
}


let dateOfBirth = new Date('1993-06-17')
console.log('la edad en funcion es:')
console.log(calculateAge(dateOfBirth))









