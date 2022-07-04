// TITULO
const mensaje = document.createElement("h1")
mensaje.innerText = "Calcula tus cuotas"
document.body.appendChild(mensaje)


// INPUT
const nombre = document.createElement("div")
nombre.innerHTML = '<label>INGRESE UN NOMBRE</label> <input  id=NombreIngresado>'
document.body.appendChild(nombre)


// INPUT
const precio = document.createElement("div")
precio.innerHTML = '<label>INGRESE EL MONTO TOTAL</label> <input type=number id=DineroIngresado>'
document.body.appendChild(precio)


// INPUT
const porcentaje = document.createElement("div")
porcentaje.innerHTML = '<label>INGRESE EL PORCENTAJE</label> <input type=number id=PorcentajeIngresado>'
document.body.appendChild(porcentaje)


// SELECT
let cuotas = document.createElement("div")
let opciones = "<label>SELECCIONE LA CANTIDAD DE CUOTAS </label><select id=select>"

for (let i = 1; i <= 48; i++) {

    opciones += `<option value=${i}>${i}</option>`
}
opciones += "</select>"
cuotas.innerHTML = opciones
document.body.appendChild(cuotas)


// SEND BOTON
const enviar = document.createElement("div")
enviar.innerHTML = `<input id="enviar" type="submit" value="ENVIAR">`
document.body.appendChild(enviar)

// FUNCIONES 
let total = 0
let valor = 0
function resultado() {
    valor = (Number(DineroIngresado.value * PorcentajeIngresado.value / 100) + Number(DineroIngresado.value)) / Number(select.value)
    localStorage.setItem("valor", valor)
    const local = localStorage.getItem(`valor`)
    total = Number(local) * Number(select.value)
    console.log(total)

}


// ENVENTO
enviar.addEventListener("click", () => {
    resultado()
    let table = document.createElement("div")
    table.innerHTML = ""

    let CrearTabla = "<table class=table>"
    CrearTabla += `
    <thead>
        <tr>
            <th scope="col">NOMBRE</th>
            <th scope="col">VALOR INSERTADO</th>
            <th scope="col">MESES</th>
            <th scope="col">PORCENTAJE</th>
            <th scope="col">A PAGAR POR MES</th>
            <th scope="col">TOTAL</th>
        </tr>
    </thead>`
    CrearTabla += `<tr>
        <th scope="row">${NombreIngresado.value}</th>
        <td>${DineroIngresado.value}</td>
        <td>${select.value}</td>
        <td>${PorcentajeIngresado.value}</td>
        <td>${valor}</td>
        <td>${total}</td>
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

// FETCH
fetch('/historial.json',)
    .then((res) => res.json())
    .then((data) => {

        console.log(data)

    })







