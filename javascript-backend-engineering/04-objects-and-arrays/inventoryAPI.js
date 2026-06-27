const inventory = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 15000,
        stock: 5,
        categoria: "electronica"
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 800,
        stock: 0,
        categoria: "accesorios"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 4500,
        stock: 3,
        categoria: "electronica"
    },
];


function agregarProducto(inventory, producto) {
    return [...inventory, producto];
}

function buscarPorId(inventory, id) {
    return inventory.find(item => item.id === id) || null;
}

function actualizarProducto(inventory, id, cambios) {
    return inventory.map(producto => {
        if (producto.id === id) {
            return {
                ...producto,
                ...cambios
            };
        }
        return producto;
    });
}

function eliminarProducto(inventory, id) {
    return inventory.filter(producto => producto.id !== id);
}

const nuevoProducto = {
    id: 4,
    nombre: 'Mouse',
    precio: 350,
    stock: 10,
    categoria: 'accesorios'
}

const inventarioActualizado = agregarProducto(inventory, nuevoProducto)

console.log('=== Inventario original ===')
console.log(inventory.length)

console.log('=== Inventario actualizado ===')
console.log(inventarioActualizado.length)
console.log(inventarioActualizado)

console.log('=== buscarPorId ===')
console.log(buscarPorId(inventory, 1))   // existe
console.log(buscarPorId(inventory, 99))  // no existe

console.log('=== actualizarProducto ===')
console.log(actualizarProducto(inventory, 1, { precio: 16000, stock: 3 }))
console.log(actualizarProducto(inventory, 99, { precio: 16000 })) // id no existe

console.log('=== eliminarProducto ===')
console.log(eliminarProducto(inventory, 2))  // elimina Teclado
console.log(eliminarProducto(inventory, 99)) // id no existe, sin cambios