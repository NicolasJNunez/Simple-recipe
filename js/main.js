document.getElementById("calcular-btn").addEventListener("click", function(event) {
  event.preventDefault();

  const arrozConLeche = function () {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    var calculo; 
    calculo = (`${cantidadIngrediente} ${unidad} ${nombre}`);
    return calculo;
  };
  const factor = document.getElementById("litros").value
  const resultado = [
  ingrediente (1, "litro", "de leche"),
  ingrediente (120, "gramo", "de arroz"),
  ingrediente (160, "gramo", "de azucar"),
  ingrediente (1, "cucharada", "de esencia de vainilla"),
  ];
  document.querySelector("#resultado").innerHTML = resultado.join("<br>");
};

arrozConLeche();
});
