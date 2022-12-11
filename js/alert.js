function alertaAgregado ()  {
    Toastify({
        text: 'El producto se agregó correctamente',
        duration: 1500,
        gravity: 'top',
        position: 'right',
        style: {
            background: '#00dc85'
        }
    }).showToast()
}

function alertaEliminado ()  {
    Toastify({
        text: 'El producto se eliminó correctamente',
        duration: 1500,
        gravity: 'top',
        position: 'right',
        style: {
            background: '#df3731'
        }
    }).showToast()
}
function alertaVaciar ()  {
    Toastify({
        text: 'El carrito ha sido vaciado',
        duration: 1500,
        gravity: 'top',
        position: 'right',
        style: {
            background: '#F1C40F '
        }
    }).showToast()
}

function alertaComprar () {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La compra se ha realizado con exito.',
        html: 'Verifique su correo electronico para coordinar el retiro y el pago de su compra!!',
        showConfirmButton: false,
        timer: 16655500
      })
}
