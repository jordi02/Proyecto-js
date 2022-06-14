const mensaje = document.createElement("h1")
mensaje.innerText = "Calcula tus cuotas"
document.body.appendChild(mensaje)

const precio = document.createElement("div")
precio.innerHTML = '<label>INGRESE PRECIO DE VENTA EN UN PAGO</label> <input type=number id=DineroIngresado>'
document.body.appendChild(precio)

let cuotas2 = document.createElement("div")
let opciones = "<label>Seleccione las cuotas a pagar </label><select id=select>"

for (let i = 1; i <= 24; i++) {

    opciones += `<option value=${i}>${i}</option>`
}
opciones += "</select>"
cuotas2.innerHTML = opciones
document.body.appendChild(cuotas2)

const porcentaje = document.createElement("div")
porcentaje.innerHTML = '<label>Ingrese el porcentaje de interes de sus cuotas</label> <input type=number id=PorcentajeIngresado>'
document.body.appendChild(porcentaje)


const enviar = document.createElement("div")
enviar.innerHTML = `<input id="enviar" type="submit" value="ENVIAR">`
document.body.appendChild(enviar)

enviar.addEventListener("click", () => {
    resultado(document.getElementById("DineroIngresado").value, document.getElementById("select").value, document.getElementById("PorcentajeIngresado").value)

    Toastify({
        text: "Operacion exitosa",
        duration: 2000,
        gravity: `bottom`,
        position: `right`,
    }).showToast()

})

function resultado() {
    let valor = (Number(DineroIngresado.value * PorcentajeIngresado.value / 100) + Number(DineroIngresado.value)) / Number(select.value)
    localStorage.setItem("valor", valor)
    const local = localStorage.getItem(`valor`)
    const generador = document.createElement("div")
    generador.innerHTML = `<h1>Tendrá que pagar ${local} por mes </h1>`
    document.body.appendChild(generador)


}
