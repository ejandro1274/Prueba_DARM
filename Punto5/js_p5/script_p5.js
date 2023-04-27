// Seleccionar el botón "enviar" configurado en index_p5.html

let boton_envia = document.getElementById("enviar");

// Seleccionar el elemento donde se van a mostrar las alertas
let alertas0 = document.getElementById("str_alertas0");
let alertas1 = document.getElementById("str_alertas1");
let alertas2 = document.getElementById("str_alertas2");
let alertas3 = document.getElementById("str_alertas3");

// Se agrega un evento al botón "enviar" para que ejecuta la función cuando se haga clic
boton_envia.addEventListener('click', () =>{
     // Se borran todas las alertas con la función Alerta
    Alerta([], 0);

     // Se obtiene el nombre, usuario y contraseña ingresada por el usuario
    let nom_in = document.getElementById("nombre").value;
    let user_in = document.getElementById("correo").value;
    let key_in = document.getElementById("key").value;

    //Validaciones

    // Validación 0: se encarga de verificar que ningún campo de entrada está vacío
    let validacion0 = ValidacionVacio(nom_in, user_in, key_in);
    if (validacion0 === 0){
        // Validación 1: se encarga de verificar que el usuario ingresado sea válido
        let validacion1 = ValidadorUser(user_in);
        if (validacion1 == 0){
            // Validación 1: se encarga de verificar que la clave ingresada sea válida
            let validacion2 = ValidadorKey(key_in);
            if (validacion2 == 0){
                // Se envía la alerta de que todo salió bien
                Alerta([], 4);
            }
        }
    }
        
});
function ValidacionVacio(nombre_ingresado, user_ingresado, key_ingresada){
    /**
     * Función encargada de validar si los campos de nombre, usuario y clave están vacíos
     * @param {string} nombre_ingresado - Nombre ingresado por el usuario
     * @param {string} user_ingresado - Usuario ingresado por el usuario
     * @param {string} key_ingresada - Clave ingresada por el usuario
     * @returns {number} - 1 si hay un campo vacío, 0 si todos los campos están llenos
     */

    if (nombre_ingresado === ''){
        Alerta(['Debe ingresar su nombre'], 1);
        return 1
    }else if(user_ingresado === ''){
        Alerta(['Debe ingresar un usuario'], 1);
        return 1
    }else if(key_ingresada === ''){
        Alerta(['Debe ingresar una clave'], 1);
        return 1
    }else{
        Alerta([], 0);
        return 0
    }
}

function ValidadorUser(user_ingreado){
    /**
     * Función que valida si un usuario ingresado es válido
     * @param {string} user_ingreado - Usuario ingresado por el usuario
     * @returns {number} - 0 si el usuario es válido, 1 si hay errores en el usuario
     */

    
    let user_out = user_ingreado;
    // Se convierte el string del usuario en un array
    let array_user = user_ingreado.split('');

    // Inicialización de variables
    let cont_arroba = 0;
    let array_mensajes = [];
    let band_dominios = 1;
    let contador_alertas = 0;

    // Array que contiene los dominios más utilizados
    const dominiosEmail = [".com", ".org", ".net", ".gov", ".edu", ".mil", ".info", ".co"];
    // Ciclo que se encarga de verificar que el usuario contenga alguno de los dominio de dominiosEmail
    for (let j = 0;j <= dominiosEmail.length - 1; j++){
        if (user_out.includes(dominiosEmail[j])){
            band_dominios = 1;
            break;
        }{
            band_dominios = 0;
        }
    }
    // Se valida y se envía el mensaje de dominio no válido
    if (band_dominios === 0){
        array_mensajes.push('El dominio ingresado no es válido');
        contador_alertas++;
    }


    // Ciclo que se encarga de contar la cantidad de "@" presentes en el usuario ingresado
    for (let i = 0;i <= array_user.length - 1; i++){
        if (array_user[i] === '@'){
            cont_arroba++;
        }
    }

    // Se valida que solo haya un "@" en el usuario
    if (cont_arroba < 1){
        array_mensajes.push('el usuario debe ser de la forma: user@servicio.com');
        contador_alertas++;
    }else if (cont_arroba > 1){
        array_mensajes.push('el usuario solo puede contener un @');
        contador_alertas++;
    }

    
    // Sí ocurrieron alertas se envían los mensajes, de lo contrario se retorna el usuario ingresado 
    if (contador_alertas === 0){
        console.log('Usuario almacenado: '+user_out);
        return 0
    }else{
        Alerta(array_mensajes, contador_alertas);
        return 1
    }
}



function ValidadorKey(key_ingresada){
    /**
     * La función 'ValidadorKey' se encarga de validar si la clave ingresada por el usuario es válida según las condiciones entregadas en la prueba.
     * @param {string} key_ingresada - La clave ingresada por el usuario.
     * @returns {number} Retorna un valor numérico, 0 si la clave es válida y 1 si no lo es.
     */
    let key_out = key_ingresada;

    // Se convierte el string de la clave en un array
    let array_key = key_out.split('');

    // Inicialización de variables
    let bandera_mayus = 0;
    let contador_alertas = 0;
    let array_mensajes = [];
    

    // Se valida que la longitud de la clave sea mayor a 8 caracteres, de lo contrario se envía el mensaje de alerta
    if (key_out.length < 8){
        array_mensajes.push("su clave tiene menos de 8 caracteres");
        contador_alertas++;
        
    }
    // Se determina si al menos hay una mayúscula en la clave con la función DeterminadorMayuscula
    bandera_mayus = DeterminadorMayuscula(key_out);
    // Se valida con base a bandera_mayus que la clave tenga al menos hay una mayúscula
    if (bandera_mayus === 0){
        array_mensajes.push("su clave debe tener al menos 1 caracter en mayúscula");
        contador_alertas++;
    }

    // Se valida que al menos haya un número en la clave, de lo contrario se envía el mensaje de alerta
    if (/\d/.test(key_out)){
        // pass
    }else{
        array_mensajes.push("su clave debe tener al menos un número");
        contador_alertas++;
    }


    // Sí ocurrieron alertas se envían los mensajes, de lo contrario se retorna la clave ingresada
    if (contador_alertas === 0){
        // Se "encripta" la clave utilizando el cifrado de César
        console.log('Clave almacenada (encriptada): '+ CifradoCesar(key_out, 3));
        return 0
    }else{
        Alerta(array_mensajes, contador_alertas);
        return 1
    }

       
}

function Alerta(array_alertas, num_alertas){
    /**
     * Función encarga de mostrar en la página web las alertas de la verificación de usuario y clave.
     * @param {string[]} array_alertas - Array de strings con los mensajes de error a mostrar.
     * @param {number} num_alertas - Número de mensajes de error a mostrar en la alerta.
     * @returns {void}
     */
 
    // Mensaje para un error
    if (num_alertas == 1){
        alertas1.innerHTML = "Error: " + array_alertas[0];
    }
    // Mensaje para dos errores
    else if(num_alertas == 2){
        alertas1.innerHTML = "Error: " + array_alertas[0];
        alertas2.innerHTML = "Error: " + array_alertas[1];
    }
    // Mensaje para tres errores
    else if(num_alertas == 3){
        alertas1.innerHTML = "Error: " + array_alertas[0];
        alertas2.innerHTML = "Error: " + array_alertas[1];
        alertas3.innerHTML = "Error: " + array_alertas[2];
    }
    // Cuando num_alertas es cero se eleminan los mensajes de errores
    else if(num_alertas == 0){
        alertas1.innerHTML = "";
        alertas2.innerHTML = "";
        alertas3.innerHTML = "";
    }
    // Cuando num_alertas es cuatro se envía el mensaje de registro exitoso
    else if(num_alertas === 4){
        alertas0.innerHTML = "El registro fue exitoso, consulte la consola para verificar las credenciales ingresadas.";

    }
         
}

function DeterminadorMayuscula(string_input){
    /**
     * Determina si hay alguna letra en mayúscula en un string
     * @param {string} string_input - String que se desea verificar
     * @returns {number} - 1 si hay al menos una letra en mayúscula, 0 si no hay ninguna letra en mayúscula.
     */
    array_input = string_input.split('');

    for (let i = 0; i <= array_input.length - 1; i++){
        
        let string_array = array_input[i];

        if (string_array === string_array.toUpperCase()){
            
            return 1;
        }
        
    }
    return 0
}


function CifradoCesar(input_key, corrimiento){
    /**
     * Aplica el cifrado César a una cadena de texto utilizando un corrimiento dado.
     * @param {string} input_key - El string a encriptar.
     * @param {number} corrimiento - El número de posiciones para correr las letras en el alfabeto.
     * @returns {string} - La cadena de texto encriptada.
     */

    let key_encriptada = input_key;
    
    // Se convierte la cadena de texto en un array
    let array_input = key_encriptada.split('');

    // Inicialización de variables
    let array_enciptado = [];
    const alfabeto_min = [];
    const alfabeto_may = [];

    // Se generan los arrays que contienen el alfabeto en mayusculas y minusculas 
    // a partir de un ciclo for que convierte los valores del código ASCII a string con 
    // el método .fromCharCode()
    for(let i = 97; i <= 122; i++){
        if (i === 111){
            alfabeto_min.push("ñ");
            alfabeto_may.push("Ñ");
        }else if(i > 111){
            alfabeto_min.push(String.fromCharCode(i - 1));
            alfabeto_may.push((String.fromCharCode(i - 1)).toUpperCase());
        }else{
            alfabeto_min.push(String.fromCharCode(i));
            alfabeto_may.push((String.fromCharCode(i)).toUpperCase());
        }
    }

    // Se inicia la encriptación realizando el corrimiento de la letro a partir del valor 
    // corrimiento ingresado
    for (let i = 0;i <= array_input.length - 1; i++){
        // Si la letra es un número, se agrega directamente al array encriptado.
        if (/\d/.test(array_input[i])){
            array_enciptado.push(array_input[i]);
        }

        // Si la letra es un espacio, se agrega directamente al array encriptado.
        else if(array_input[i] == ' '){
            array_enciptado.push(' ');
        }
        // Si la letra es una letra mayúscula, se busca el índice en el array alfabeto_may,
        // se le suma el corrimiento y se agrega la letra encriptada al array encriptado.
        else if(DeterminadorMayuscula(array_input[i]) === 1){
            let index_key = alfabeto_may.indexOf(array_input[i]);
            array_enciptado.push(alfabeto_may[index_key + corrimiento]);
        }
        // Si la letra es una letra minúscula, se busca el índice en el array alfabeto_min,
        // se le suma el corrimiento y se agrega la letra encriptada al array encriptado.
        else if(DeterminadorMayuscula(array_input[i]) === 0){
            let index_key = alfabeto_min.indexOf(array_input[i]);
            array_enciptado.push(alfabeto_min[index_key + corrimiento]);
        }

    }
    return array_enciptado.join('')
}

