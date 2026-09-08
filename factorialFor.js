function factorial(n) {
    let resultado = 1;
    let serie = "";

    for (let i = n; i >= 1; i--) {
        resultado = resultado * i;
        serie += i;

        if (i > 1) {
            serie += " × ";
        }
    }

    console.log("Factorial de " + n);
    console.log(serie + " = " + resultado);
}

let numero = 5;

factorial(numero);