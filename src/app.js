import express from "express"
import ProductManager from "./class/productManager.js";

const app = express();
app.use(express.urlencoded( {extended : true}));


const products = new ProductManager();
const allProducts = await products.readProducts();

app.get("/", (req, res) => {
    res.send("Welcome to my server created with Express.");
})

app.get ("/products", (req,res) => {
    const {limit} = req.query

    if(limit) return res.send(allProducts.slice(0, limit));
   
    return res.send(allProducts);
    
})

app.get("/products/:pid", (req, res) => {
    const { pid } = req.params;

    const product = allProducts.find(product => product.id === +pid && product)

    if(product) return res.send(product)

    return res.send({ messageError: "Product doesn't exist." })
})


const PORT = 8080;
app.listen(PORT, ()  => {
    console.log(`Express server running on local host : ${PORT}.`);
})

//+++++++++TESTING+++++++++

// All products

//          http://localhost:8080/products


// Only 5 product 
//          http://localhost:8080/products?limit=5

// product by ID

//          http://localhost:8080/products/2

// product by ID doesn't exist

//          http://localhost:8080/products/34123123