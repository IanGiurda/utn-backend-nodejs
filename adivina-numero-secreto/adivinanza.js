const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) { // El numero adivinado es una string por lo tanto debemos compararlo usando "==" y no "===" (este ultimo requiere que coincidan los tipos). Sino se genera un bug.
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};

//Exportamos las funciones que queremos llamar fuera
module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};