document.addEventListener('DOMContentLoaded', () => {

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
            nombre: "Coca-cola 1.25L",
            descripcion: "La clásica y refrescante bebida de cola en su versión personal.",
            precio: "$1.200",
            imagen: "./assets/img/coca-cola1.25L.jpg"
        }
    ];
 
    const productosContainer = document.getElementById('productos-container');

    function crearTarjetaDeProducto(producto) {
        // Usamos las clases de tu styles.css
        return `
            <div class="col-md-4">
                <div class="card">
                    <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" class="card-image-product">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="precio-producto">${producto.precio}</p>
                </div>
            </div>
        `;
    }

    productos.forEach(producto => {
        const tarjetaHTML = crearTarjetaDeProducto(producto);
        productosContainer.innerHTML += tarjetaHTML;
    });

});