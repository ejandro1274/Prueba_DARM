// Seleccionar el botón "enviar" configurado en index_p4.html
let boton_ingresar = document.getElementById("boton_in");

// Seleccionan los elementos donde se van a mostrar los resultados
let texto_NumPal = document.getElementById("out_NumPal");
let texto_PalUno = document.getElementById("out_PalUno");
let texto_PalFin = document.getElementById("out_PalFin");
let texto_PalInvertida = document.getElementById("out_PalInvertida");

// Se agrega un evento al botón "ingresar" para que ejecuta la función cuando se haga clic
boton_ingresar.addEventListener('click', () => {
    // Se obtiene el valor del string ingresado por el usuario
    let texto_ingresado = document.getElementById("tex_in").value;
    // Se llama a la función InformationTex
    InformationTex(texto_ingresado);
});

function InformationTex(texto_inf){
    /**
     * Esta función recibe un string y determina la cantidad de palabras, la primera y última palabra, e invierte la frase ingresada
     * @param {String} texto_inf - String que contiene la frase ingresada por el usuario.
     */

    // Determina la longitud
    let num_pal = texto_inf.split(' ').length.toString();
    // Determina la primera palabra
    let pal_uno =  texto_inf.split(' ')[0].toLowerCase();
    // Determina la últina palabra
    let pal_fin =  texto_inf.split(' ');
    // Invierte la frase
    pal_fin =  pal_fin[pal_fin.length - 1];
    let tex_invertido = InvertirCaracteres(texto_inf);
    texto_NumPal.innerHTML = "Número de palabras: " + num_pal;
    texto_PalUno.innerHTML = "Primera palabra: " + pal_uno;
    texto_PalFin.innerHTML = "Última palabra: " + pal_fin;
    texto_PalInvertida.innerHTML = "Oración invertida: " + tex_invertido;
}

function InvertirCaracteres(string_in){
    /**
     * La función toma un string y convierte todos los caracteres en minúsculas usando el método 'toLowerCase()'.
     * Luego convierte el string en un array, invierte el orden de sus elementos usando el método 'reverse()',
     * finalmente une los elementos en un nuevo string usando el método 'join()'.
     * @param {String} string_in - String que contiene la frase que se desea invertir.
     * @returns {String} - String con la frase invertida.
    */

    let arreglo_out = string_in.toLowerCase().split('').reverse().join('');
    return arreglo_out;
}

