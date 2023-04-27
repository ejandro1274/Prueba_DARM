// Seleccionar el botón "enviar" configurado en index_p3.html
let boton_ingresar = document.getElementById("enviar");
// Seleccionar el elemento donde se van a mostrar los resultados
let resultado_out = document.getElementById("respuesta");

// Se agrega un evento al botón "enviar" para que ejecuta la función cuando se haga clic
boton_ingresar.addEventListener('click', () => {
    // Se obtiene el valor del input "arreglo_in"
    let arreglo_in = document.getElementById("arreglo_in").value;
    
    // Se remueven los caracteres {}()[] y los espacios  del string del input "arreglo_in"
    arreglo_in = arreglo_in.replace(/[{}()\[\]]/g, '');
    arreglo_in = arreglo_in.replace(' ', '');
    let array_in = arreglo_in.split(',');

    // Se llama a la función InvertirCaracteres
    let array_invertido = InvertirCaracteres(array_in);

    // Se envían los resultados al elemento resultados de index_p3.HTML
    resultado_out.innerHTML = "Resultados: " + array_invertido;

});

function InvertirCaracteres(arreglo_in){
    /**
     * Esta función recibe un arreglo de caracteres, invierte el orden de los caracteres que no sean especiales y los devuelve en un nuevo arreglo
     * 
     * @param {Array} arreglo_in - El arreglo de caracteres a invertir
     * @returns {Array} - Retorna el arreglo con los caracteres invertidos con la condición de los caracteres especiales
     */

    // Se inicializan las variables
    let arreglo_invertir = [];
    let arreglo_out = [];
    let caracteres_especiales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?·ºªç¡`]/;

    // Se recorre el arreglo de entrada y se separan los caracteres especiales del resto
    for (let i = 0; i <= arreglo_in.length - 1; i++){
        if (caracteres_especiales.test(arreglo_in[i])){
            arreglo_out[i] = arreglo_in[i];
        }
        else{
            arreglo_out[i] = '';
            arreglo_invertir.push(arreglo_in[i]);
        }

    }

    // Se invierte el orden de los caracteres que no son especiales
    arreglo_invertir= arreglo_invertir.reverse();
    let len_invertido = arreglo_invertir.length;
    let contador = 0;
    console.log(len_invertido);

    // Se combinan los caracteres especiales con los caracteres no especiales invertidos
    for (let j = 0;j <= arreglo_out.length - 1; j++){
        if (arreglo_out[j] === ''){
            arreglo_out[j] = arreglo_invertir[contador]; 
            contador++;
        }
        if (contador === len_invertido){
            break;
        }
    }

    return arreglo_out;
}


