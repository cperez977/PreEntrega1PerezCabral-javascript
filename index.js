
function calcularCuotas(){
    //pedir nombre
        let nombre = prompt('ingrese un nombre: ');
        console.log(nombre);

        while (nombre === "") {
            nombre = prompt("Por favor, ingrese su nombre:");
        }
    //pedir apellido
        let apellido = prompt('ingrese apellido: ');
        console.log(apellido);
    
        while (apellido === "") {
            apellido = prompt("Por favor, ingrese su apellido:");
        }
    //pedir monto
        let monto = prompt('ingrese el monto que desea financiar');

        while (monto === "") {
            monto = prompt("Por favor, ingrese el monto:");
        }
    //pedir cantidad de cuotas
        let cuotas = prompt("ingrese la cantidad 1, 3, 6 o 12 cuotas");

        //calculo de cuotas

        switch(cuotas){
            case "1":
                montoMensual = monto;
                alert(nombre +" "+ apellido +" deberá abonar por mes $"+montoMensual);
                break;

            case "3":
                montoMensual = monto / 3;
                alert(nombre +" "+ apellido +" deberá abonar por mes $"+montoMensual);
                break;
            
            case "6":
                montoMensual = monto / 6;
                alert(nombre +" "+ apellido +" deberá abonar por mes $"+montoMensual);
                break;


            case "12":
                montoMensual = monto / 12;
                alert(nombre +" "+ apellido +" deberá abonar por mes $"+montoMensual);
                break;

            default:
                alert ("ingrese una opción posible")
                break;

            
        }
    }

    calcularCuotas();
