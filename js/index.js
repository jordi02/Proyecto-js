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

let mama = 0
let valor = 0
function resultado() {
    valor = (Number(DineroIngresado.value * PorcentajeIngresado.value / 100) + Number(DineroIngresado.value)) / Number(select.value)
    localStorage.setItem("valor", valor)
    const local = localStorage.getItem(`valor`)
    const generador = document.createElement("div")
    generador.innerHTML = `<h1>Tendrá que pagar ${local} por mes </h1>`
    document.body.appendChild(generador)
    mama = Number(local) * Number(select.value)
    console.log(mama)

}




enviar.addEventListener("click", () => {
    resultado()
    let table = document.createElement("div")
    let CrearTabla = "<table class=table>"
    CrearTabla += `
    <thead>
        <tr>
            <th scope="col">Operacion</th>
            <th scope="col">VALOR INSERTADO</th>
            <th scope="col">MESES</th>
            <th scope="col">PORCENTAJE</th>
            <th scope="col">A PAGAR POR MES</th>
            <th scope="col">TOTAL</th>
        </tr>
    </thead>`
    CrearTabla += `<tr>
        <th scope="row"></th>
        <td>${DineroIngresado.value}</td>
        <td>${select.value}</td>
        <td>${PorcentajeIngresado.value}</td>
        <td>${valor}</td>
        <td>${mama}</td>
    </tr>`
    CrearTabla += "</table>"
    table.innerHTML = CrearTabla
    document.body.appendChild(table)


    Toastify({
        text: "Operacion exitosa",
        duration: 2000,
        gravity: `bottom`,
        position: `right`,
    }).showToast()

})

fetch('/catalogo.json',)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            console.log(producto.precio)
            console.log(producto.nombre)
        })
    })






