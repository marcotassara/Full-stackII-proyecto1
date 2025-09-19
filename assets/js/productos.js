document.addEventListener('DOMContentLoaded', () => {

    // Lista de productos con sus detalles
    const productos = [
        {
            nombre: "Coca-Cola 3L",
            descripcion: "La clásica y refrescante bebida de cola en su versión familiar.",
            precio: "$2.500",
            imagen: "./assets/img/coca-cola3L.jpg"
        },
        {
            nombre: "Kem Piña 2.5L",
            descripcion: "Refrescante bebida de piña, perfecta para el verano.",
            precio: "$1.800",
            imagen: "./assets/img/Kem2.5L.jpg"
        },
        {
            nombre: "Piri Cola 3L",
            descripcion: "Una alternativa económica y sabrosa a la bebida de cola.",
            precio: "$1.500",
            imagen: "./assets/img/piricola3L.jpg"
        },
        {
            nombre: "Score 591ml",
            descripcion: "Es una bebida energética.",
            precio: "$1.200",
            imagen: "./assets/img/score591ML.jpg"
        },
        {
            nombre: "Galletas de Chocolate",
            descripcion: "Deliciosas galletas con trozos de chocolate.",
            precio: "$1.200",
            imagen: "./assets/img/coca-cola1.25L.jpg"
        }
    ];

  
    const productosContainer = document.getElementById('productos-container');

    function crearTarjetaDeProducto(producto) {

        return `
            <div class="col-md-4 mb-4 text-center">
                <div class="card shadow rounded-3 h-100">
                    <img src="${producto.imagen}" class="card-img-top image rounded-top" alt="Imagen de ${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title font-family-franklin">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text fw-bold color-black">${producto.precio}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Recorremos la lista de productos y agregamos cada uno al contenedor
    productos.forEach(producto => {
        const tarjetaHTML = crearTarjetaDeProducto(producto);
        productosContainer.innerHTML += tarjetaHTML;
    });

});