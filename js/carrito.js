const cargarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        return JSON.parse(localStorage.getItem('carrito'))
    }
    return []
}

//Eliminar componente del carrito
const eliminarComponente = (id) => {
    let componentesEnCarrito = cargarCarrito()
    const indexCarrito = componentesEnCarrito.findIndex(index => index.id == id)
    componentesEnCarrito[indexCarrito].cantidad -= 1

    if (componentesEnCarrito[indexCarrito].cantidad == 0) {
        componentesEnCarrito = componentesEnCarrito.filter(idComponente => idComponente.id != id)
    }

    localStorage.setItem('carrito', JSON.stringify(componentesEnCarrito))
    mostrarCarrito()
    alertaEliminado()

}

const tablaCarrito = document.querySelector('.tbodyCarrito')

const mostrarCarrito = () => {
    let total = 0
    let htmlContent = ''
    const contenidoCarrito = cargarCarrito()
    contenidoCarrito.forEach(componente => {
        htmlContent += `
        <tr>
          <td>${componente.marca}</td>
          <td>${componente.modelo}</td>
          <td>$${componente.precio}</td>
          <td>
            <img src='${componente.imgSrc}' alt='componente-img'>
          </td>
          <td> <input type="text" value="${componente.cantidad}" min="0" class="cart-quantity" disabled></td>
          <td> <button class="botonEliminar" onclick="eliminarComponente(${componente.id});"> 🗑️ </button></td>
        </tr>
    `
        document.querySelector('.tbodyCarrito').innerHTML = htmlContent
        total += componente.precio * componente.cantidad
    })
    document.querySelector('.totalPrecio').innerHTML = `$${total}`

    
}

mostrarCarrito()

//VaciarCarrito
const vaciarCarrito = () => {
    localStorage.removeItem("carrito")
    document.querySelector('.tbodyCarrito').innerHTML = ''
    document.querySelector('.totalPrecio').innerHTML = ''

    alertaVaciar()

}

const btnVaciar = document.querySelector('.btnVaciar')
btnVaciar.addEventListener('click', vaciarCarrito)

