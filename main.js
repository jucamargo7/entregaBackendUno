class productManager{
    static producto = []
    static ID = 0
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price= price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;

    }
    addProducts(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Tiene que agregar todos los datos para crear el producto")
        } else{
            const productoExistente = productManager.producto.some(producto => producto.code === code);
            if (productoExistente){
                console.log("Ya existe el producto con el mismo código");
            }else{
                const crearProducto = {id: productManager.ID + 1, title, description, price, thumbnail, code, stock}
                productManager.ID++;
                productManager.producto.push(crearProducto)
            }
        }
        
     }
     getProducts(){
        return console.log(productManager.producto) 
     }
     getProductById(ID){
        const foundProduct = productManager.producto.find(x => x.id === ID)
        if (foundProduct == undefined){
            console.log("El ID no existe")
        } else{
            console.log(foundProduct)
        }
        
     }
    
}


const manager = new productManager();
manager.addProducts("Producto 1", "Descripción del producto 1", 10.99, "imagen1.jpg", "001", 50);
manager.addProducts("Producto 2", "Descripción del producto 2", 19.99, "imagen2.jpg", "002", 30);
manager.addProducts("Producto 3", "Descripción del producto 2", 10.98, "imagen2.jpg", "003", 30);
// manager.getProducts()
manager.getProductById(1)







