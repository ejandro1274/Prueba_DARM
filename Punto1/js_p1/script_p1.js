// Seleccionar el botón "enviar" configurado en index_p1.html
let boton_ingresar = document.getElementById("enviar");
// Seleccionar el elemento donde se van a mostrar los resultados
let resultado_out = document.getElementById("respuesta");

// Se agrega un evento al botón "enviar" para que ejecuta la función cuando se haga clic
boton_ingresar.addEventListener('click', () => {

    // Se obtiene el valor del input "arreglo_in"
    let arreglo_in = document.getElementById("arreglo_in").value;
    // Se obtiene el valor del input "num_in"
    let num_in = parseInt(document.getElementById("num_in").value);

    // Se remueven los caracteres {}()[] y los espacios  del string del input "arreglo_in"
    arreglo_in = arreglo_in.replace(/[{}()\[\]]/g, '');
    arreglo_in = arreglo_in.replace(' ', '');

    // Se convertir el string de "arreglo_in" en un array
    let array_in = arreglo_in.split(',');

    // Se convertir el arreglo de "string" a un arreglo de enteros
    let array_num = array_in.map((elemento)=>{
        return parseInt(elemento);
    });

    // Se llama a la función "SumaDeNumeros"
    let resultados_sum = SumaDeNumeros(array_num, num_in);

    // Se verifica los resultados obtenidos para enviar el mensaje al elemento resultados de index_p1.HTML
    if (resultados_sum[0].toString() == 'NaN' || resultados_sum[0].toString() == 'NaN' || 
    num_in.toString() == 'NaN'){
        resultado_out.innerHTML = "Error: verifique que los datos ingresados sean correctos"

    }else{
        resultado_out.innerHTML = "Resultados: la suma de " + resultados_sum[0] + 
        " y " + resultados_sum[1] + " se acerca a " + num_in
    }  
});


function SumaDeNumeros(arreglo, num){
    /**
     * Esta función recibe un arreglo de números y un número "num".
     * Encuentra la suma de dos números dentro del arreglo cuya suma sea lo más cercana posible al número "num".
     * Devuelve un arreglo con los dos números cuya suma es la más cercana al número "num".
     * 
     * @param {Array} arreglo - Un arreglo de números ingresado por el usuario.
     * @param {Number} num - El número objetivo al que se acercará la suma de dos números en el arreglo.
     * @returns {Array} - Un arreglo con los dos números cuya suma es la más cercana a "num".
     */

    // Se obtiene la longitud del arreglo
    const len_arreglo = arreglo.length;

    // Inicialización de variables
    let indice = 0; 
    let par_num = [];
    let suma_pnum = 0;

    // Ciclo para permutar todos los posibles valores
    while (true){
        // Se recorre el arreglo desde el índice actual
        for(let i = indice; i <= len_arreglo; i++){
            // Se condiciona que no se puede sumar el mismo elemento para obtener la suma mas cercana
            if (i != indice){
                if (par_num.length == 0){
                    // Se realiza la suma de los números en los índices "índice" e "i"
                    // y se guardan en "suma_pnum" y en "par_num"
                    suma_pnum = arreglo[indice] + arreglo[i];
                    par_num[0] = arreglo[indice];
                    par_num[1] = arreglo[i];
                    console.log(suma_pnum);
                }else{
                    // Se realiza la suma de los números en los índices "índice" e "i"
                    // y se comparan con la suma actual de los números en "par_num".
                    // Si la nueva suma es más cercana a "num" que la suma actual en "par_num",
                    // se actualiza "par_num" con los nuevos números.
                    suma_pnum = arreglo[indice] + arreglo[i];
                    let nuevo_sum = par_num[0] + par_num[1]
                    if (Math.abs(num - suma_pnum) < Math.abs(num - nuevo_sum)){
                        par_num[0] = arreglo[indice];
                        par_num[1] = arreglo[i];
                    }
                }
            }
            
        }

        // Si se recorre todo el arreglo se termina el ciclo
        if (indice >= len_arreglo){
            break;
        }else{
            // Se aumenta la posición del índice estático para realizar una nueva permutación
            indice++;
        }
    }
    return par_num;
}

