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