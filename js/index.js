const mensaje = document.createElement("h1")
mensaje.innerText = "Calcula tus cuotas"
document.body.appendChild(mensaje)

const precio = document.createElement("div")
precio.innerHTML = '<label>INGRESE PRECIO DE VENTA EN UN PAGO</label> <input type=number id=DineroIngresado>'
document.body.appendChild(precio)

const cuotas = document.createElement("div")
cuotas.innerHTML = `<label>SELECIONE LOS MESES A PAGAR</label> <select id=select>
<option disabled="" value="">Selecciona un valor</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
</select> `
document.body.appendChild(cuotas)

const porcentaje = document.createElement("div")
porcentaje.innerHTML = '<label>Ingrese el porcentaje de interes de sus cuotas</label> <input type=number id=PorcentajeIngresado>'
document.body.appendChild(porcentaje)


const enviar = document.createElement("div")
enviar.innerHTML = `<input id="enviar" type="submit" value="ENVIAR">`
document.body.appendChild(enviar)

enviar.addEventListener("click", () => {
    resultado(document.getElementById("DineroIngresado").value, document.getElementById("select").value, document.getElementById("PorcentajeIngresado").value)
})

function resultado() {
    let valor = (Number(DineroIngresado.value * PorcentajeIngresado.value / 100) + Number(DineroIngresado.value)) / Number(select.value)
    alert("Va a pagar : " + valor + " al mes")
    localStorage.setItem("valor", valor)

    const ternario = (isNaN(DineroIngresado.value)) ? alert("El valor introducido no es válido") : alert("Operación éxitosa")

}
