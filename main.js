// Entrega 2

const fs = require("fs");


class productManager{
    static ID = 0;
    constructor(path){
        this.path = path;
        this.product = []
    }

    addProducts(title, description, price, thumbnail, code, stock){

        const crearProducto = {id: productManager.ID + 1, title, description, price, thumbnail, code, stock}
            productManager.ID++;
            this.product.push(crearProducto)
        fs.promises.writeFile(this.path, JSON.stringify(this.product), "utf-8")
        .then(()=> console.log("Se añadió su producto"))
        .catch((error) => console.error("Error al agregar el producto:", error));
    }
    async getProducts() {
        try {
          const data = await fs.promises.readFile(this.path, "utf-8");
          const products = JSON.parse(data);
          console.log(products);
        } catch (error) {
          console.error("No se pueden obtener los productos", error);
        }
    }
    async getProductByID(id) {
      try {
        const data = await fs.promises.readFile(this.path, "utf-8");
        const products = JSON.parse(data);
        const foundProduct = products.find((x) => x.id === id);
        console.log(foundProduct);
        console.log(data)
      } catch (error) {
        console.error("Error al obtener el producto por ID:", error);
      }
    }
    async removeProductByID(id) {
      try {
        const data = await fs.promises.readFile(this.path, "utf-8");
        if (data.trim().length === 0) {
          console.log("El archivo de productos está vacío.");
          return;
        }
        const products = JSON.parse(data);
        const updatedProducts = products.filter((x) => x.id !== id);
        if (products.length === updatedProducts.length) {
          console.log("No se encontró ningún producto con el ID especificado.");
          return;
        }
        await fs.promises.writeFile(this.path, JSON.stringify(updatedProducts), "utf-8");
        console.log("El producto ha sido eliminado correctamente.");
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
    async updateProductByID(id, newData) {
      try {
        const data = await fs.promises.readFile(this.path, "utf-8");
        if (data.trim().length === 0) {
          console.log("El archivo de productos está vacío.");
          return;
        }
        const products = JSON.parse(data);
        const productIndex = products.findIndex((x) => x.id === id);
        if (productIndex === -1) {
          console.log("No se encontró ningún producto con el ID especificado.");
          return;
        }
        products[productIndex] = { ...products[productIndex], ...newData };
        await fs.promises.writeFile(this.path, JSON.stringify(products), "utf-8");
        console.log("El producto ha sido actualizado correctamente.");
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
      }
    }      
      
}

const prod1 = {
    title: "producto 1",
    description: "Pruena",
    price: 200,
    thumbnail: "sin imagen",
    code: "dscds",
    stock: 4545
}
const prod2 = {
    title: "producto 1",
    description: "Pruena",
    price: 200,
    thumbnail: "sin imagen",
    code: "dscds",
    stock: 4545
}
const prod3 = {
  title: "producto 3",
  description: "Pruena",
  price: 300,
  thumbnail: "sin imagen",
  code: "dscds",
  stock: 4545
}

const updatedData = {
  title: "producto 24",
  description: "fewfv",
  price: 25,
  thumbnail: "veew",
  code: "ewgfwe",
  stock: 100
};

const manager = new productManager("productos.json");
manager.addProducts(prod1);
manager.addProducts(prod2);
manager.addProducts(prod3);
// manager.getProducts();
// manager.getProductByID(2);
// manager.removeProductByID(1)
// manager.updateProductByID(2, updatedData);

//Entrega 1
// class productManager{
//   static producto = []
//   static ID = 0
//   constructor(title, description, price, thumbnail, code, stock){
//       this.title = title;
//       this.description = description;
//       this.price= price;
//       this.thumbnail = thumbnail;
//       this.code = code;
//       this.stock = stock;

//   }
//   addProducts(title, description, price, thumbnail, code, stock){
//       if(!title || !description || !price || !thumbnail || !code || !stock){
//           console.log("Tiene que agregar todos los datos para crear el producto")
//       } else{
//           const productoExistente = productManager.producto.some(producto => producto.code === code);
//           if (productoExistente){
//               console.log("Ya existe el producto con el mismo código");
//           }else{
//               const crearProducto = {id: productManager.ID + 1, title, description, price, thumbnail, code, stock}
//               productManager.ID++;
//               productManager.producto.push(crearProducto)
//           }
//       }
      
//    }
//    getProducts(){
//       return console.log(productManager.producto) 
//    }
//    getProductById(ID){
//       const foundProduct = productManager.producto.find(x => x.id === ID)
//       if (foundProduct == undefined){
//           console.log("El ID no existe")
//       } else{
//           console.log(foundProduct)
//       }
      
//    }
  
// }


// const manager = new productManager();
// manager.addProducts("Producto 1", "Descripción del producto 1", 10.99, "imagen1.jpg", "001", 50);
// manager.addProducts("Producto 2", "Descripción del producto 2", 19.99, "imagen2.jpg", "002", 30);
// manager.addProducts("Producto 3", "Descripción del producto 2", 10.98, "imagen2.jpg", "003", 30);
// manager.getProducts()
// manager.getProductById(1)






