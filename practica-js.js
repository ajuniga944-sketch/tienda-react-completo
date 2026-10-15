// ============================================
// TALLER: JavaScript aplicado a React
// practica-js.js - Todos los retos resueltos
// ============================================

console.log("JavaScript listo para practicar");

// ============================================
// RETO 1: Funciones, parámetros y return
// ============================================

function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

const resultado = calcularTotal(50000, 3);
console.log("calcularTotal(50000, 3):", resultado); // 150000

// Tarea: crear las funciones

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log("sumar(10, 5):", sumar(10, 5));
console.log("restar(10, 5):", restar(10, 5));
console.log("multiplicar(10, 5):", multiplicar(10, 5));
console.log("dividir(10, 5):", dividir(10, 5));
console.log("calcularPromedio(4.5, 3.8, 4.2):", calcularPromedio(4.5, 3.8, 4.2));

/*
  Diferencia entre console.log() y return:
  - console.log() muestra un valor en la consola para que el programador lo vea,
    pero NO detiene ni devuelve ese valor a quien llamó la función.
  - return detiene la ejecución de la función y envía un valor de vuelta
    al lugar donde se invocó la función, permitiendo usarlo después
    (guardarlo en una variable, pasarlo a otra función, etc.).
*/

// ============================================
// RETO 2: Funciones flecha
// ============================================

// Conversión de función tradicional a arrow
const aplicarIva = (precio) => {
  return precio * 1.19;
};

// Forma corta
const aplicarIvaCorta = (precio) => precio * 1.19;

console.log("aplicarIva(100000):", aplicarIva(100000));
console.log("aplicarIvaCorta(100000):", aplicarIvaCorta(100000));

// Tarea

const cuadrado = (numero) => numero * numero;

const esMayorEdad = (edad) => edad >= 18;

const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("cuadrado(7):", cuadrado(7));
console.log("esMayorEdad(20):", esMayorEdad(20));
console.log("esMayorEdad(15):", esMayorEdad(15));
console.log("nombreCompleto('Ana', 'García'):", nombreCompleto("Ana", "García"));

// ============================================
// RETO 3: Arreglos y objetos
// ============================================

const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Perifericos", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 90000, categoria: "Perifericos", stock: 0 },
  { id: 3, nombre: "Monitor", precio: 650000, categoria: "Pantallas", stock: 3 },
  { id: 4, nombre: "Auriculares", precio: 120000, categoria: "Audio", stock: 8 },
  { id: 5, nombre: "Webcam", precio: 180000, categoria: "Perifericos", stock: 2 },
  { id: 6, nombre: "SSD 1TB", precio: 350000, categoria: "Almacenamiento", stock: 4 },
  { id: 7, nombre: "Memoria RAM 16GB", precio: 280000, categoria: "Componentes", stock: 0 },
  { id: 8, nombre: "Laptop Stand", precio: 75000, categoria: "Accesorios", stock: 12 },
  { id: 9, nombre: "Hub USB-C", precio: 95000, categoria: "Perifericos", stock: 6 },
  { id: 10, nombre: "Monitor 27 4K", precio: 1200000, categoria: "Pantallas", stock: 1 },
  { id: 11, nombre: "Micrófono USB", precio: 210000, categoria: "Audio", stock: 3 },
  { id: 12, nombre: "Mousepad XL", precio: 45000, categoria: "Accesorios", stock: 15 },
];

console.log("\n--- Productos (total:", productos.length, ") ---");
console.log(productos);

// ============================================
// RETO 4: forEach()
// ============================================

console.log("\n--- forEach: lista completa ---");
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

// ============================================
// RETO 5: map()
// ============================================

const nombres = productos.map((producto) => producto.nombre);
console.log("\nNombres:", nombres);

const preciosConIva = productos.map((producto) => producto.precio * 1.19);
console.log("Precios con IVA:", preciosConIva);

const nombresMayuscula = productos.map((producto) => producto.nombre.toUpperCase());
console.log("Nombres mayúscula:", nombresMayuscula);

const resumenProductos = productos.map(
  (producto) => `${producto.nombre} cuesta $${producto.precio}`
);
console.log("Resumen:", resumenProductos);

// ============================================
// RETO 6: filter() y find()
// ============================================

const disponibles = productos.filter((producto) => producto.stock > 0);
console.log("\nDisponibles (stock > 0):", disponibles.length);

const caro = productos.filter((producto) => producto.precio > 100000);
console.log("Precio > $100.000:", caro.map((p) => p.nombre));

const rango = productos.filter(
  (producto) => producto.precio >= 50000 && producto.precio <= 200000
);
console.log("Precio entre $50.000 y $200.000:", rango.map((p) => p.nombre));

const soloPerifericos = productos.filter(
  (producto) => producto.categoria === "Perifericos"
);
console.log("Categoría Perifericos:", soloPerifericos.map((p) => p.nombre));

const producto5 = productos.find((producto) => producto.id === 5);
console.log("Producto id 5:", producto5);

function buscarProducto(id) {
  return productos.find((producto) => producto.id === id);
}

console.log("buscarProducto(7):", buscarProducto(7));
console.log("buscarProducto(99):", buscarProducto(99)); // undefined

// ============================================
// RETO 7: some(), every() y reduce()
// ============================================

const hayAgotados = productos.some((producto) => producto.stock === 0);
console.log("\n¿Existe algún producto agotado?", hayAgotados);

const hayMuyCaro = productos.some((producto) => producto.precio > 1000000);
console.log("¿Existe algún producto > $1.000.000?", hayMuyCaro);

const preciosValidos = productos.every((producto) => producto.precio > 0);
console.log("¿Todos tienen precio > 0?", preciosValidos);

const stockValido = productos.every((producto) => producto.stock >= 0);
console.log("¿Todos tienen stock >= 0?", stockValido);

const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
console.log("Valor total del inventario: $", valorInventario);

// ============================================
// RETO 8: JavaScript moderno
// ============================================

console.log("\n--- Template literals ---");
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

console.log("\n--- Desestructuración ---");
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

console.log("\n--- Spread ---");
const productoActualizado = {
  ...productos[0],
  stock: 8,
};
console.log("Original:", productos[0]);
console.log("Actualizado:", productoActualizado);

console.log("\n--- Operador ternario ---");
const estado = productoActualizado.stock > 0 ? "Disponible" : "Agotado";
console.log(estado);

// Tarea: copia de un producto cambiando precio y stock
const productoCopiado = {
  ...productos[3], // Auriculares
  precio: 110000,
  stock: 10,
};

const estadoCopia =
  productoCopiado.stock > 0 ? "Disponible" : "Agotado";

console.log(
  `El producto ${productoCopiado.nombre} ahora cuesta $${productoCopiado.precio} y está ${estadoCopia}`
);

console.log("\n=== Fin de la práctica de JavaScript ===");
