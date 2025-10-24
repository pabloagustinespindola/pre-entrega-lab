//Obtener todos los productos

let [, , method, resource, ...params] = process.argv;

//console.log(method)
//console.log(resource)

const metodo = method.toUpperCase()
const recurso = resource.toLowerCase()

if (metodo == "GET" && recurso == "products"){
    console.log("Lista de productos:")
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));

}

// Obtener productos por ID

if (metodo == "GET" && recurso.startsWith("products/")){

    const id = resource.split("/")[1]

    // console.log(id)
    if (isNaN(id)||id <1){
        console.log("El ID no es un numero")
    } else {
        console.log("Producto con ID " + id + ":")
        fetch('https://fakestoreapi.com/products/'+id)
        .then(response => response.json())
        .then(data => console.log(data));
    }
}

// Crear producto nuevo

if (metodo == "POST" && recurso == "products"){
    // params = todos los parametros despues del 4 parametro
    const [title, price, category] = params;
    const product = {
        title,
        price,
        category,
    };

    console.log("Nuevo producto:")
    fetch('https://fakestoreapi.com/products', {
    method: 'POST',
     headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
    })
     .then(response => response.json())
    .then(data => console.log(data));
}

// Eliminar producto por ID

if (metodo == "DELETE" && recurso.startsWith("products/")){
    const id = resource.split("/")[1]
    //console.log(id)

    if (isNaN(id)||id <1){
        console.log("El ID no es un numero")
    } else {
        console.log("Producto eliminado:")
        fetch('https://fakestoreapi.com/products/'+id, {
        method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }
}