const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "sumar") {
        return (num1 + num2);
    } 
    else if (operacion == "restar") {
        return (num1 - num2);
    }
    else if (operacion == "multiplicar") {
        return (num1 * num2);
    }
    else if (operacion == "dividir") {
        if (num2 == 0) {
            return "No es posible realizar una división por cero"
        }

        return (num1 / num2);
    }
    else {
        return "Esta operacion no es válida"
    }
}

let num1, num2, operacion;
let pregunta;

while(operacion != "salir") {
    num1 = prompt("\nIngrese el primer número \n");
    num2 = prompt("Ingrese el segundo número \n");
    
    operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir): \n");

    console.log("El resultado es: ")
    console.log(realizarOperacion(+num1, +num2, operacion))

    pregunta = prompt("\n\nDesea realizar otra operación? \n")

    if (pregunta == "si") {
        continue
    } else {
        console.log("Gracias por usar la calculadora! Adiós!!\n")
        break
    }
}