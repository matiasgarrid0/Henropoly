const oneTarget = (player, box, roll) => {
  var position;
  switch (player) {
    case 1:
        position.x = 0
        position.y = 0
      break;
    case 2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      break;
    case 3:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      break;
  }
  if (box !== 0 && box !== 10 && box !== 20 && box !== 30) {
    return "ddd";
  }
  if (box > 0 && box < 10) {
    return "dd";
  }
  if (box > 10 && box < 20) {
    return "ddd";
  }
  if (box > 20 && box < 30) {
    return "sss";
  }
  return "s";
};

module.exports = {
  oneTarget,
};
