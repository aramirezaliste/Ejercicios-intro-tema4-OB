// If
let numeroIf = 0;

if (numeroIf > 0) {
    console.log("Es Positivo");
} else if (numeroIf < 0) {
    console.log("Es Negativo");
} else {
    console.log("Es 0");
}

// While

let numeroWhile = 0;

while (numeroWhile < 3) {
    numeroWhile++;
    console.log(numeroWhile);
}

// Do While
let numeroWhile1 = 0;

do {
    numeroWhile1++;
    console.log(numeroWhile1);
} while (numeroWhile1 < 1);

// For

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    console.log(numeroFor);
}

// Switch

let estacion = "VERANO";

switch (estacion) {
    case "INVIERNO":
        console.log("Es Invierno");
        break;
    case "VERANO":
        console.log("Es Verano");
        break;
    case "PRIMAVERA":
        console.log("Es Primavera");
        break;
    case "OTOÑO":
        console.log("Es Otoño");
        break;

    default:
        console.log("No es una estacion");
}
