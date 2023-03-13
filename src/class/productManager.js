import fs from "fs"


export default class ProductManager {
    constructor(){
        this.path = "./src/products.txt";
        this.products = [];
    };

    

    //Methods 

    

    readProducts = async () => {

        let result = await fs.promises.readFile(this.path, "utf-8")

        return JSON.parse(result)

    };

    getProducts = async () => {
        let allProducts = await this.readProducts()
        return console.log (allProducts)
    };


}


 