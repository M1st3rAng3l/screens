var data1 = [["folio", "detalle", "material", "tratamiento", "graduacion", "cantidad", "total", "anticipado", "restante", "codigo"]];

function add() {
  let folio= document.getElementById("folio").value;
  let detalle = document.getElementById("detalle").value;
  let material = document.getElementById("material").value;
  let tratamiento= document.getElementById("tratamiento").value;
  let graduacion = document.getElementById("graduacion").value;
  let cantidad = document.getElementById("cantidad").value;
  let total= document.getElementById("total").value;
  let anticipado = document.getElementById("anticipado").value;
  let restante = document.getElementById("restante").value;
  let codigo = document.getElementById("codigo").value;
  data1.push([folio, detalle, material, tratamiento, graduacion, cantidad, total, anticipado, restante, codigo]);
  showRegisters1();
}

function showRegisters1() {
  document.getElementById("datos1").innerHTML = "";
  //filas
  for (let k = 1; k < data.length; k++) {
    let td = "";
    //columnas
    for (let i = 0; i <= 9; i++) {
      td += `<td>${data[k][i]}</td>`;
    }
    document.getElementById("datos1").innerHTML += `<tr>${td}</tr>`;
  }
}

