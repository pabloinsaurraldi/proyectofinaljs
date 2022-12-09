
// Variables
const cargarComponenteAlCarrito = () => {
  if (localStorage.getItem('carrito')) {
    return JSON.parse(localStorage.getItem('carrito'))
  } else {
    return []
  }
}

let componentes = []

const contenedorDeCards = document.querySelector('#bodyComponentes')

const verComponentes = () => {
  componentes.forEach((Componente) => {
    const otraCard = document.createElement('div')
    otraCard.className = 'cardHorizontal'
    otraCard.innerHTML = `
    <div class="contImgCardHorizontal">
      <a href="#"><img src="${Componente.imgSrc}" class="imgCardHorizontal"
      alt="motherB460"></a>
    </div>
    <div class="contTxtCardHorizontal">
      <h6 class="tituloCardHorizontal"> ${Componente.marca} </h6> 
      <p class="precioCardHorizontal"> ${Componente.modelo} </p>
      <p class="precioCardHorizontal"> ${Componente.caracteristica} </p>
      <p class="precioCardHorizontal">$ ${Componente.precio} </p> 
        <div class="contBtnCardHorizontal">
          <button class="botonComprar" data-id="${Componente.id}"> Agregar al Carrito </button>
        </div>
      </div> 
    `
    contenedorDeCards.append(otraCard);
  })

  //Agregar componente del carrito
  
  const sumarComponente = (e) => {
    const idDComponenteElegido = e.target.getAttribute('data-id')
    const componenteElegido = componentes.find((Componente) => Componente.id == idDComponenteElegido)
    const componentesEnCarrito = cargarComponenteAlCarrito()
    const indexCarrito = componentesEnCarrito.findIndex(index => index.id == idDComponenteElegido)

    if (indexCarrito === -1) {
      componenteElegido.cantidad = 1
      componentesEnCarrito.push(componenteElegido)
    } else {
      componentesEnCarrito[indexCarrito].cantidad += 1
    }
    localStorage.setItem('carrito', JSON.stringify(componentesEnCarrito))
    alertaAgregado()
  }

  const botonCarrito = document.querySelectorAll('.botonComprar')
  botonCarrito.forEach((boton) => {
    boton.addEventListener('click', sumarComponente);
  })
}

fetch('../json/data.json')
.then((response) => response.json())
.then((data) => {
  componentes = data;
  verComponentes()
})

