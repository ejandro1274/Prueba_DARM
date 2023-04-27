// Seleccionar el botón "enviar" configurado en index_p1.html
let boton_ingresar = document.getElementById("enviar");
// Seleccionar el elemento donde se van a mostrar los resultados
let resultado_out = document.getElementById("respuesta");

// Se agrega un evento al botón "enviar" para que ejecuta la función cuando se haga clic
boton_ingresar.addEventListener('click', () => {
    // Se obtiene el valor de las frases ingresadas por el usuario
    let string_in1 = document.getElementById("string_1").value;
    let string_in2 = document.getElementById("string_2").value;

    // Se verifica que se hayan ingresado ambas frases
    if (string_in1 === '' || string_in2 === ''){
        resultado_out.innerHTML = "Error, no se han ingresado todos los valores.";
    }else{

        // Se llama a la función VerificadorAnagramas
        let resultado_anagrama = VerificadorAnagramas(string_in1, string_in2);

        // Se verifica los resultados obtenidos para enviar el mensaje al elemento resultados de index_p2.HTML
        if (resultado_anagrama == true){
            resultado_out.innerHTML = "Resultados: verdadero, las dos frases ingresadas son anagramas";
        }else{
            resultado_out.innerHTML = "Resultados: falso, las dos frases ingresadas no son anagramas";
        }
    }
});



function QuitaMayusTildes(string_in){
    /**
     * Esta función se encarga de quitar las tildes y las mayúsculas que el usuario ingresa
     * 
     * @param {String} string_in - String que contiene la frase ingresada por el usuario
     * @returns {String} - Un String que contiene la frase sin tildes ni mayúsculas
     */

    // Se convierte la cadena de entrada en minúsculas y se almacena en una variable
    let string_out = string_in.toLowerCase();

    // Se eliminan todas las posibles tildes que contenga la frase
    string_out = string_out.replace('á', 'a')
    string_out = string_out.replace('é', 'e')
    string_out = string_out.replace('í', 'i')
    string_out = string_out.replace('ó', 'o')
    string_out = string_out.replace('ú', 'u');
    return string_out;
    
}

function VerificadorAnagramas(string1, string2){
    /**
     * Esta función verifica si dos strings son anagramas.
     * 
     * @param {String} string1 - El primer string a comparar.
     * @param {String} string2 - El segundo string a comparar.
     * @returns {Boolean} - Retorna true si los strings son anagramas, false en caso contrario.
     */

    // Se convierte cada cadena de caracteres a un arreglo, se eliminan las mayúsculas y tildes y se ordena alfabéticamente.
    let array_string1 = QuitaMayusTildes(string1).split('').sort();
    let array_string2 = QuitaMayusTildes(string2).split('').sort();

    // Se eliminan los espacios en blanco del arreglo.
    array_string1 = array_string1.filter((caracter) =>  caracter != ' ');
    array_string2 = array_string2.filter((caracter) =>  caracter != ' ');


    // Si la longitud no coincide se concluye que no son anagramas
    if (array_string1.length != array_string2.length){
        return false;
    }else{
        // Si la longitud es la misma se verifica que sean iguales
        if (array_string1.join('') === array_string2.join('')){
            console.log(array_string1.join(''))
            console.log(array_string2.join(''))
            return true;
        }else{
            false;
        }

    }
}


